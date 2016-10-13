import * as express from "express";

import { ITodo, Todo, ITodoModel } from "../../models";

export class RestTodo {
    constructor() {}

    list(
        request: express.Request,
        response: express.Response
    ): any {
        Todo.find({}).exec(
            (error: any, todos: ITodoModel[]) => {
                return response.send({
                    todos: todos || []
                });
            }
        );
    }

    create(
        request: express.Request,
        response: express.Response
    ): any {
        let data = [];
        request.on("data", chunk => {
            data.push(chunk);
        }).on("end", () => {
            let todoString = Buffer.concat(data).toString();
            let todo: ITodo = todoString ? JSON.parse(todoString) : {};
            todo.created = new Date();
            Todo.create(todo, (error: any, todo: ITodoModel) => {
                if (todo) {
                    return response.send(todo);
                } else {
                    return response.status(400).send({ 
                        success: false, 
                        message: "Invalid parameters" 
                    });
                }
            });
        });
    }

    find(
        request: express.Request,
        response: express.Response
    ): any {
        const id = request.params["todo"];
        if (id) {
            Todo.findById(id).exec(
                (error: any, todo: ITodoModel) => {
                    if (todo) {
                        return response.send(todo);
                    } else {
                        return response.status(404).send({ 
                            success: false, 
                            message: "Todo not found" 
                        });
                    }
                }
            );
        } else {
            response.status(400).send({
                success: false,
                message: "Bad request" 
            });
        }
    }

    update(
        request: express.Request,
        response: express.Response
    ): any {
        const id = request.params["todo"];
        if (id) {
            let data = [];
            request.on("data", chunk => {
                data.push(chunk);
            }).on("end", () => {
                let todoString = Buffer.concat(data).toString();
                let todoUpdated: ITodo = todoString ? JSON.parse(todoString) : {};
                Todo.findById(id).exec(
                    (error: any, todo: ITodoModel) => {
                        if (todo) {
                            todo.updated = new Date();
                            if (todoUpdated.title) { todo.title = todoUpdated.title; }
                            todo.save();
                            return response.send(todo);
                        } else {
                            return response.status(404).send({ 
                                success: false, 
                                message: "Todo not found" 
                            });
                        }
                    }
                );
            });
        } else {
            response.status(401).send({
                success: false,
                message: "Unauthorized" 
            });
        }
    }

    remove(
        request: express.Request,
        response: express.Response
    ): any {
        const id = request.params["todo"];
        if (id) {
            Todo.findById(id).exec(
                (error: any, todo: ITodoModel) => {
                    if (todo) {
                        todo.remove();
                        return response.send({ 
                            success: true, 
                            message: "Todo removed sucessfully" 
                        });
                    } else {
                        return response.status(404).send({ 
                            success: false, 
                            message: "Todo not found" 
                        });
                    }
                }
            );
        } else {
            response.status(400).send({
                success: false,
                message: "Bad request" 
            });
        }
    }
}