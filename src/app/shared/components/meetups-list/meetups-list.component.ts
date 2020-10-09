import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetupService } from '../../../core/services';
import { IMeetupEvent } from '../../../../models';

@Component({
  selector: 'meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: [ './meetups-list.component.styl'],
})



export class MeetupsListComponent implements OnInit {

  meetups: Observable<IMeetupEvent[]>;

  constructor(private meetupService: MeetupService) {
  	this.meetups = this.meetupService.events('#AngularFI');
  }
  ngOnInit() {
  }

}
