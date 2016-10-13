import { Component } from "@angular/core";

import { TwitterService } from "../../../shared/services";

import { ITwitterMessage } from "../../../../models";

declare var require;
const styles: string = require("./tweets-list.component.styl");
const template: string = require("./tweets-list.component.pug");

@Component({
    selector: "tweets-list",
    styles: [styles],
    template
})

export class TweetsListComponent {
    tweets: ITwitterMessage[];

    constructor(private twitterService: TwitterService) {
        this.twitterService.tweets("#AngularFI").subscribe( tweets => {
            this.tweets = tweets;
        });
    }
}
