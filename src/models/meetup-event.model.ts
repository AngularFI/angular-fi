import { IMeetupGroup, MeetupGroup } from "./meetup-group.model";
import { IMeetupVenue, MeetupVenue } from "./meetup-venue.model";

export interface IMeetupEvent {
    created: Date;
    description: string;
    duration: number;
    group: IMeetupGroup;
    how_to_find_us: string;
    id: number;
    link: string;
    name: string;
    rsvp_limit: number;
    status: string;
    time: Date;
    updated: Date;
    utc_offset: number;
    venue: IMeetupVenue;
    visibility: string;
    waitlist_count: number;
    yes_rsvp_count: number;
}

export class MeetupEvent implements IMeetupEvent {
    created: Date;
    description: string;
    duration: number;
    group: IMeetupGroup;
    how_to_find_us: string;
    id: number;
    link: string;
    name: string;
    rsvp_limit: number;
    status: string;
    time: Date;
    updated: Date;
    utc_offset: number;
    venue: IMeetupVenue;
    visibility: string;
    waitlist_count: number;
    yes_rsvp_count: number;

    constructor(params: any) {
        this.created = new Date(params.created);
        this.description = params.description;
        this.duration = parseInt(params.duration, 10);
        this.group = new MeetupGroup(params.group);
        this.how_to_find_us = params.how_to_find_us;
        this.id = parseInt(params.id, 10);
        this.link = params.link;
        this.name = params.name;
        this.rsvp_limit = parseInt(params.rsvp_limit, 10);
        this.status = params.status;
        this.time = new Date(params.time);
        this.updated = new Date(params.updated);
        this.utc_offset = parseInt(params.utc_offset, 10);
        this.venue = new MeetupVenue(params.venue);
        this.visibility = params.visibility;
        this.waitlist_count = parseInt(params.waitlist_count, 10);
        this.yes_rsvp_count = parseInt(params.yes_rsvp_count, 10);
    }
}
