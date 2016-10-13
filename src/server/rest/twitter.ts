import * as express from "express";
import * as redis from "redis";

import { Twitter } from "../../models";

export class RestTwitter {
    constructor(private redis: redis.RedisClient) {}

    list(
        request: express.Request,
        response: express.Response
    ): any {
        const term = request.query["q"];
        const count = parseInt(request.query["count"], 10);
        let twitter = new Twitter(this.redis);
        twitter.search(term, count)
            .then( tweets => {
                response.send({
                    success: true,
                    tweets: tweets
                });
            })
            .catch( () => {
                return response.status(400).send({ 
                    success: false, 
                    message: "Invalid parameters" 
                });
            });
    }
}