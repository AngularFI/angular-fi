import * as express from "express";

export class RestDefault {

    constructor() {}

    request(
        request: express.Request,
        response: express.Response
    ): express.Response {
        return response.send({
            success: true
        });
    }
}