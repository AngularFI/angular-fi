import * as request from 'request';
import * as EmailValidator from 'email-validator';

declare var process;

export class Slack {
  private url: string = 'https://slack.com/api/users.admin.invite';
  private token: string = process.env.SLACK_API_TOKEN;

  constructor() {}

  invite(email: string): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      if (EmailValidator.validate(email)) {
        const url = this.url + '?token=' + this.token + '&email=' + encodeURIComponent(email);
        request.get(url, (error: any, response: any, body: any) => {
          let data;
          try {
            data = JSON.parse(body);
          } catch (err) {
            data = {};
          }

          if (!error && body && data && data.ok) {
            resolve(true);
          } else {
            reject();
          }
        });
      } else {
        reject();
      }
    });
  }
}
