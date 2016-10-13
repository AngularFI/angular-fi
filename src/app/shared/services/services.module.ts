import { NgModule, ModuleWithProviders } from "@angular/core";

import { MeetupService } from "./meetup.service";
import { TwitterService } from "./twitter.service";
import { UserService } from "./user.service";

const SERVICES = [
	MeetupService,
    TwitterService,
    UserService
]

@NgModule({
    providers: [
        ...SERVICES
    ]
})
export class ServicesModule {}
