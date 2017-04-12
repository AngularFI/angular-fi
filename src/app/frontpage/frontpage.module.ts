import { NgModule } from '@angular/core';

import { MasonryModule } from 'angular2-masonry';

import { SharedModule } from '../shared/shared.module';

import { FrontpageComponent } from './frontpage.component';
import { FrontpageRouting } from './frontpage.routing';

import {
  EventsListComponent,
  SlackJoinComponent,
  TweetComponent,
  TweetsListComponent
} from './components';

@NgModule({
  imports: [
    SharedModule,
    FrontpageRouting,
    MasonryModule
  ],
  declarations: [
    FrontpageComponent,
    EventsListComponent,
    SlackJoinComponent,
    TweetComponent,
    TweetsListComponent
  ]
})

export class FrontpageModule {}
