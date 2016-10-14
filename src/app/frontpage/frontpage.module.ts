import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MasonryModule } from "angular2-masonry";

import { SharedModule } from "../shared/shared.module";

import { FrontpageComponent } from "./frontpage.component";
import { FrontpageRoutes } from "./frontpage.routing";

import {
    EventsListComponent,
    TweetComponent,
    TweetsListComponent
} from "./components";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(FrontpageRoutes),
        MasonryModule
    ],
    declarations: [
        FrontpageComponent,
        EventsListComponent,
        TweetComponent,
        TweetsListComponent
    ]
})

export class FrontpageModule {}