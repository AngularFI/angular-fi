import { Component } from '@angular/core';
import { MeetupService } from '../../../core/services';
import { IMeetupEvent } from '../../../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'events-list',
  styleUrls: ['./events-list.component.styl'],
  templateUrl: './events-list.component.html'
})

export class EventsListComponent {
  meetups: Observable<IMeetupEvent[]>;

  constructor(private meetupService: MeetupService) {
  	this.meetups = this.meetupService.events('#AngularFI');
  }
}
