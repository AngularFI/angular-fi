import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { MeetupService } from '../../../core/services';

import { IMeetupEvent } from '../../../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'events-list',
  styleUrls: ['./events-list.component.styl'],
  templateUrl: './events-list.component.pug'
})

export class EventsListComponent {
  events: IMeetupEvent[] = [];

  constructor(private meetupService: MeetupService) {
    this.meetupService.events('angular-finland')
      .subscribe( events => this.events = events );
  }
}
