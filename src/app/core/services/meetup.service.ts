import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMeetupEvent } from '../../../models';

@Injectable()
export class MeetupService {
  private url: string = '/rest/event';

  constructor() {}

  events(group: string): Observable<IMeetupEvent[]> {
  	return new Observable(observer => observer.next([]));
  }
}
