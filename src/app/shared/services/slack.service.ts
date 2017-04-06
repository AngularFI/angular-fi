import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class SlackService {
  private url: string = '/rest/slack';

  constructor(private http: Http) {}

  invite(email: string): Observable<boolean> {
    const data: any = { email };
    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options)
      .map(response => response.json())
      .map(data => data.success ? true : false)
      .catch(() => Observable.of(false));
  }
}
