import * as request from "request";
import * as redis from "redis";

import { ITwitterMessage, TwitterMessage } from "./twitter-message.model";

declare var process;

export class Twitter {
    private url: string = "https://api.twitter.com/1.1/";
    private authUrl: string = "https://api.twitter.com/oauth2/token";
    private consumerKey: string = process.env.TWITTER_CONSUMER_KEY;
    private consumerSecret: string = process.env.TWITTER_CONSUMER_SECRET;
    private accessToken: string;

    constructor(private redis: redis.RedisClient) {}

    search(term: string, count: number = 25) {
        return new Promise( (resolve, reject) => {
            const url = this.url + "search/tweets.json?q=" + encodeURIComponent(term) + "&count=" + count;
            this.redis.get(url, (error: any, reply: string) => {
                if (reply) {
                    resolve(this.parseData(reply));
                } else {
                    this.getAccessToken()
                        .then( () => {
                            request.get({
                                url: url,
                                headers: {
                                    "Authorization": "Bearer " + this.accessToken
                                }
                            }, (error: any, response: any, body: any) => {
                                this.redis.set(url, body);
                                this.redis.expire(url, 60);
                                resolve(this.parseData(body));
                            });
                        })
                        .catch( () => {
                            console.error("Could not get Twitter access token");
                            reject();
                        });
                }
            });
        });
    }

    private parseData(raw: string) {
        let tweets: ITwitterMessage;
        try {
            let data = JSON.parse(raw);
            tweets = data.statuses.map( status => new TwitterMessage(status) );
        } catch(err) {
            // Handle error
        }
        return tweets || [];
    }

    private getAccessToken(): Promise<void> {
        return new Promise( (resolve, reject) => {
            if (this.accessToken) {
                resolve()
            } else if (this.consumerKey && this.consumerSecret) {
                request.post({
                    url: this.authUrl,
                    headers: {
                        "Authorization": "Basic " + this.authHash(),
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "grant_type=client_credentials"
                }, (error: any, response: any, body: any) => {
                    this.accessToken = undefined;
                    try {
                        let data = JSON.parse(body);
                        this.accessToken = data["access_token"];
                    } catch(err) {
                        // Handle error
                    }
                    if (this.accessToken) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            } else {
                reject();
            }
        });
    }

    private authHash() {
        return new Buffer(
            encodeURIComponent(this.consumerKey)
            + ":"
            + encodeURIComponent(this.consumerSecret)
        ).toString("base64");
    }
}