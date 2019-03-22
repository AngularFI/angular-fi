import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EventsComponent } from './events.component';
//import { MeetupService } from '../core/services';
import { EventsRouting } from './events.routing';
import { ConferencesComponent } from './conferences/conferences.component';
import { NgVikingsComponent } from './conferences/ng-vikings/ng-vikings.component';
import { Conf2019Component } from './conferences/conf2019/conf2019.component';
import { ProgramComponent } from './conferences/conf2019/program/program.component';
import { ConfHomeComponent } from './conferences/conf2019/conf-home/conf-home.component';
import { WorkshopsComponent } from './conferences/conf2019/workshops/workshops.component';
import { SpeakersComponent } from './conferences/conf2019/speakers/speakers.component';
import { InfoComponent } from './conferences/conf2019/info/info.component';
import { SponsorsComponent } from './conferences/conf2019/sponsors/sponsors.component';
import { RegistrationButtonsComponent } from './conferences/conf2019/registration-buttons/registration-buttons.component';
import { RegistrationButtonComponent } from './conferences/conf2019/registration-button/registration-button.component';
import { VideosComponent } from './conferences/conf2019/videos/videos.component';


@NgModule({
  imports: [
    CommonModule, SharedModule, EventsRouting
  ],
  declarations: [EventsComponent, ConferencesComponent, NgVikingsComponent, Conf2019Component, ProgramComponent, ConfHomeComponent, WorkshopsComponent, SpeakersComponent, InfoComponent, SponsorsComponent, RegistrationButtonsComponent, RegistrationButtonComponent, VideosComponent]
})
export class EventsModule { }
