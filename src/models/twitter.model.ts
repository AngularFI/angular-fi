import {} from 'node';
import * as request from 'request';

import { ITwitterMessage, TwitterMessage } from './twitter-message.model';

export class Twitter {
  private url: string = 'https://api.twitter.com/1.1/';
  private authUrl: string = 'https://api.twitter.com/oauth2/token';
  private consumerKey: string = process.env.TWITTER_CONSUMER_KEY;
  private consumerSecret: string = process.env.TWITTER_CONSUMER_SECRET;
  private accessToken: string;

  constructor() {}

  search(term: string, count: number = 25): Promise<ITwitterMessage[]> {
    return new Promise((resolve, reject) => {
      const url = this.url + 'search/tweets.json?q=+exclude%3Aretweets%20' + encodeURIComponent(term) + '&count=' + count;
      this.getAccessToken()
        .then( () => {
          request.get({
            url: url,
            headers: {
              Authorization: 'Bearer ' + this.accessToken
            }
          }, (requestError: any, requestResponse: any, requestBody: any) => {
            if (!requestError && requestBody) {
              resolve(this.parseData(requestBody));
            } else {
              reject(requestError);
            }
          });
        })
        .catch( () => {
          console.error('Could not get Twitter access token');
          reject();
        });
    });
  }

  private parseData(raw: any): ITwitterMessage[] {
    let tweets = [];
    try {
      let data = JSON.parse(raw);
      for (const status of data.statuses) {
        tweets.push(new TwitterMessage(status));
      }
    } catch (err) {
      // Handle error
    }
    return tweets;
  }

  private getAccessToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.accessToken) {
        resolve();
      } else if (this.consumerKey && this.consumerSecret) {
        request.post({
          url: this.authUrl,
          headers: {
            'Authorization': 'Basic ' + this.authHash(),
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'grant_type=client_credentials'
        }, (error: any, response: any, body: any) => {
          this.accessToken = undefined;
          try {
            let data = JSON.parse(body);
            this.accessToken = data.access_token;
          } catch (err) {
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

  private authHash(): string {
    return new Buffer(
      encodeURIComponent(this.consumerKey)
      + ':'
      + encodeURIComponent(this.consumerSecret)
    ).toString('base64');
  }
}
