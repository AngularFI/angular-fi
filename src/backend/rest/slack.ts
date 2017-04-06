import * as express from 'express';
import * as redis from 'redis';

import { Slack } from '../../models';

export class RestSlack {
  constructor() {}

  invite(request: express.Request, response: express.Response): any {
    const slack = new Slack();
    slack.invite(request.body.email)
      .then( () => {
        return response.send({ success: true });
      })
      .catch( () => {
        return response.status(400).send({
          success: false,
          message: 'Invalid parameters'
        });
      });
  }
}
