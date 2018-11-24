import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EventsComponent } from './events.component';
//import { MeetupService } from '../core/services';
import { EventsRouting } from './events.routing';
import { ConferencesComponent } from './conferences/conferences.component';


@NgModule({
  imports: [
    CommonModule, SharedModule, EventsRouting
  ],
  declarations: [EventsComponent, ConferencesComponent]
})
export class EventsModule { }
