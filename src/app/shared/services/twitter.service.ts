import { Injectable } from "@angular/core";
import { Http, Response,  } from "@angular/http";
import { Observable } from "rxjs";

import { ITwitterMessage } from "../../../models";

declare var process;

@Injectable()
export class TwitterService {
    private url: string = "/rest/twitter";

    constructor(private http: Http) {}

    tweets(term: string, count: number = 10): Observable<any> {
        let url = this.url + "?q=" + encodeURIComponent(term) + "&" + count;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response): ITwitterMessage[] {
        let body = response.json();
        return body.tweets as ITwitterMessage[] || [];
    }

    private handleError(error: any): Observable<ITwitterMessage[]> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.of([]);
    }
}
