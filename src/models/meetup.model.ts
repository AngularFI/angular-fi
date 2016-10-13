import * as request from "request";
import * as redis from "redis";

import { IMeetupEvent, MeetupEvent } from "./meetup-event.model";

declare var process;

export class Meetup {
    private apiUrl: string = "https://api.meetup.com/";
    private apiKey: string = process.env.MEETUP_API_KEY;

    constructor(private redis: redis.RedisClient) {}

    events(group: string): Promise<IMeetupEvent> {
        return new Promise( (resolve, reject) => {
            let url = this.apiUrl + group + "/events?key=" + this.apiKey;
            this.redis.get(url, (error: any, reply: string) => {
                if (reply) {
                    resolve(this.parseData(reply));
                } else {
                    request.get(url, (apiError: any, apiResponse: any, body: any) => {
                        if (!apiError) {
                            const data = '{"events":' + body + '}';
                            const events: IMeetupEvent[] = this.parseData(data);
                            this.redis.set(url, data);
                            this.redis.expire(url, 60);
                            resolve(this.parseData(data));
                        } else {
                            reject();
                        }
                    });
                }
            });
        });
    }

    private parseData(raw: string): IMeetupEvent[] {
        let events: IMeetupEvent[];
        try {
            const data = JSON.parse(raw);
            events = data.events.map( event => new MeetupEvent(event) );
        } catch(err) {
            // In case of error...
        }
        return events || [];
    }
}