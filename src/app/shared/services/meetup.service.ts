import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { IMeetupEvent } from '../../../models';

declare var process;

@Injectable()
export class MeetupService {
  private url: string = '/rest/event';

  constructor(private http: Http) {}

  events(group: string): Observable<IMeetupEvent[]> {
    return this.http.get(this.url + '/' + group)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response): IMeetupEvent[] {
    let body = response.json();
    return body.events as IMeetupEvent[] || [];
  }

  private handleError(error: any): Observable<IMeetupEvent[]> {
    return Observable.of([]);
  }
}
