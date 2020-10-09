import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FooterComponent, HeaderComponent } from './components';
import { MeetupService, SlackService, TwitterService, UserService } from './services';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    MeetupService,
    SlackService,
    TwitterService,
    UserService
  ],
  exports: [
    RouterModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule {}
