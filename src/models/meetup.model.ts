import {} from 'node';
import * as request from 'request';

import { IMeetupEvent, MeetupEvent } from './meetup-event.model';

export class Meetup {
  private apiUrl: string = 'https://api.meetup.com/';
  private apiKey: string = process.env.MEETUP_API_KEY;

  constructor() {}

  events(group: string): Promise<IMeetupEvent[]> {
    return new Promise( (resolve, reject) => {
      const url = this.apiUrl + group + '/events?key=' + this.apiKey;
      request.get(url, (apiError: any, apiResponse: any, body: any) => {
        if (!apiError) {
          const data = '{"events":' + body + '}';
          const events: IMeetupEvent[] = this.parseData(data);
          resolve(events);
        } else {
          reject();
        }
      });
    });
  }

  private parseData(raw: string): IMeetupEvent[] {
    let events: IMeetupEvent[];
    try {
      const data = JSON.parse(raw);
      events = data.events.map( event => new MeetupEvent(event) );
    } catch (error) {
      // In case of error...
      console.error(error);
    }
    return events || [];
  }
}
