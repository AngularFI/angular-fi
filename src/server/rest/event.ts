import * as express from "express";
import * as redis from "redis";

import { Meetup } from "../../models";

export class RestEvent {
    constructor(private redis: redis.RedisClient) {}

    list(
        request: express.Request,
        response: express.Response
    ): any {
        const group = request.params["group"];
        let meetup = new Meetup(this.redis);
        meetup.events(group)
            .then( events => {
                response.send({
                    success: true,
                    events: events
                });
            })
            .catch( error => {
                return response.status(400).send({ 
                    success: false, 
                    message: "Invalid parameters" 
                });
            });
    }
}