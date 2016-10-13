import { Component } from "@angular/core";

import { MeetupService } from "../../../shared/services";

import { IMeetupEvent } from "../../../../models";

declare var require;
const styles: string = require("./events-list.component.styl");
const template: string = require("./events-list.component.pug");

@Component({
    selector: "events-list",
    styles: [styles],
    template
})

export class EventsListComponent {
    events: IMeetupEvent[];

    constructor(private meetupService: MeetupService) {
        this.meetupService.events("angular-finland").subscribe( events => this.events = events );
    }
}
