import * as express from 'express';
import * as redis from 'redis';

import { RestDefault } from './default';
import { RestEvent } from './event';
import { RestSlack } from './slack';
import { RestTwitter } from './twitter';

declare var process;

export class Rest {
  private router: express.Router;
  private redis: redis.RedisClient;

  constructor() {
    // Setup router
    this.router = express.Router();

    // Create a connection for use of REST API for redis, to cache results
    const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
    this.redis = redis.createClient(REDIS_URL);

    // Controllers
    this.events();
    this.slack();
    this.twitter();

    // By default output something
    this.default();
  }

  private events(): void {
    let restEvent = new RestEvent(this.redis);
    this.router.get('/event/:group', (request: express.Request, response: express.Response) => restEvent.list(request, response));
  }

  private slack(): void {
    let restSlack = new RestSlack();
    this.router.post('/slack', (request: express.Request, response: express.Response) => restSlack.invite(request, response));

  }

  private twitter(): void {
    let restTwitter = new RestTwitter(this.redis);
    this.router.get('/twitter', (request: express.Request, response: express.Response) => restTwitter.list(request, response));

  }

  private default(): void {
    let restDefault = new RestDefault();
    this.router.get('*', (request: express.Request, response: express.Response) => restDefault.request(request, response));
  }
}
