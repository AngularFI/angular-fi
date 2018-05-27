import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SlackService {
  private url: string = '/rest/slack';

  constructor() {}

  invite(email: string): Observable<boolean> {
    return Observable.create(of(true));
    // const data: any = { email };
    // const headers = new Headers({ "Content-Type": "application/json" });
    // const options = new RequestOptions({ headers: headers });
    // return this.http.post(this.url, data, options)
    //   .map(response => response.json())
    //   .map(data => data.success ? true : false)
    //   .catch(() => Observable.of(false));
  }
}
