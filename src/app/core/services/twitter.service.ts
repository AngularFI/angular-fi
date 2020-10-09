import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITwitterMessage } from '../../../models';

@Injectable()
export class TwitterService {
  private url: string = '/rest/twitter';

  constructor() {}

  tweets(term: string, count: number = 10): Observable<ITwitterMessage[]> {
  	return new Observable(observer => observer.next([]));
  }
}
