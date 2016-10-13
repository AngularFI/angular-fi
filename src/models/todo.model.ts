import * as mongoose from "mongoose";

export interface ITodo {
    created: Date;
    updated?: Date;
    title: string;
}

export interface ITodoModel extends ITodo, mongoose.Document {}
 
export var TodoSchema = new mongoose.Schema({
    created: Date,
    updated: Date,
    title: String
});

export var Todo = mongoose.model<ITodoModel>("Todo", TodoSchema);