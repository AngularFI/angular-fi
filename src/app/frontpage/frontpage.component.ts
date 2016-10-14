import { Component } from "@angular/core";

import { MeetupService } from "../shared/services";

import { IMeetupEvent } from "../../models";

declare var require;
const styles: string = require("./frontpage.component.styl");
const template: string = require("./frontpage.component.pug");

@Component({
    styles: [styles],
    template
})

export class FrontpageComponent {
    events: IMeetupEvent[];

    constructor(private meetupService: MeetupService) {
        this.meetupService.events("angular-finland").subscribe( events => this.events = events );
    }
}
