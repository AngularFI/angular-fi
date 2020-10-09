import { NgModule } from '@angular/core';
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
    FrontpageRouting
  ],
  declarations: [
    EventsListComponent,
    FrontpageComponent,
    SlackJoinComponent,
    TweetComponent,
    TweetsListComponent
  ],
  exports: [EventsListComponent]
})

export class FrontpageModule {}
