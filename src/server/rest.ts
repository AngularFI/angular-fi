import * as express from "express";
import * as redis from "redis";

import { RestDefault, RestEvent, RestTodo, RestTwitter } from "./rest/index";

declare var process;

export class Rest {
    private router: express.Router;
    private redis: redis.RedisClient;

    constructor() {
        this.config();
    }

    private config(): void {
        this.setupRouter();
        this.setupRedis();
        this.events();
        this.todo();
        this.twitter();
        this.default();
    }

    private setupRouter(): void {
        this.router = express.Router();
    }

    private setupRedis(): void {
        // Create a connection for use of REST API for redis, to cache results
        const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
        this.redis = redis.createClient(REDIS_URL);
    }

    private events(): void {
        let restEvent = new RestEvent(this.redis);

        // List events
        this.router.get("/event/:group", (
            request: express.Request,
            response: express.Response
        ) => restEvent.list(request, response));
    }

    private todo(): void {
        let restTodo = new RestTodo();

        // List todos
        this.router.get("/todo", (
            request: express.Request,
            response: express.Response
        ) => restTodo.list(request, response));

        // Create todo
        this.router.post("/todo", (
            request: express.Request,
            response: express.Response
        ) => restTodo.create(request, response));

        // Find a todo
        this.router.get("/todo/:todo", (
            request: express.Request,
            response: express.Response
        ) => restTodo.find(request, response));

        // Delete a todo
        this.router.put("/todo/:todo", (
            request: express.Request,
            response: express.Response
        ) => restTodo.update(request, response));

        // Delete a todo
        this.router.delete("/todo/:todo", (
            request: express.Request,
            response: express.Response
        ) => restTodo.remove(request, response));
    }

    private twitter(): void {
        let restTwitter = new RestTwitter(this.redis);

        // List tweets
        this.router.get("/twitter", (
            request: express.Request,
            response: express.Response
        ) => restTwitter.list(request, response));

    }

    private default(): void {
        // Default route
        let restDefault = new RestDefault();
        this.router.get("*", (
            request: express.Request,
            response: express.Response
        ) => restDefault.request(request, response));
    }
}
