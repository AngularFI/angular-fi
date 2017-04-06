import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { MeetupService } from '../shared/services';

import { IMeetupEvent } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./frontpage.component.styl'],
  templateUrl: './frontpage.component.pug'
})

export class FrontpageComponent {
  events: IMeetupEvent[];

  constructor(private meetupService: MeetupService) {
    this.meetupService.events('angular-finland')
      .subscribe( events => this.events = events );
  }
}
