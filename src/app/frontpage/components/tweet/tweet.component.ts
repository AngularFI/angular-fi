import { Component, Input } from "@angular/core";

import { ITwitterMessage } from "../../../../models";

declare var require;
const styles: string = require("./tweet.component.styl");
const template: string = require("./tweet.component.pug");

@Component({
    selector: "tweet",
    styles: [styles],
    template
})

export class TweetComponent {
    @Input() tweet: ITwitterMessage;

    constructor() {}
}
