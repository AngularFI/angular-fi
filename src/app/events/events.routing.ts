import { RouterModule }  from '@angular/router';
import { EventsComponent } from './events.component';
import { ConferencesComponent } from './conferences/conferences.component'
import { NgVikingsComponent } from './conferences/ng-vikings/ng-vikings.component'
import { Conf2019Component } from './conferences/conf2019/conf2019.component'
import { ProgramComponent } from './conferences/conf2019/program/program.component'
import { ConfHomeComponent } from './conferences/conf2019/conf-home/conf-home.component'
import { WorkshopsComponent } from './conferences/conf2019/workshops/workshops.component'
import { SpeakersComponent } from './conferences/conf2019/speakers/speakers.component'
import { InfoComponent } from './conferences/conf2019/info/info.component'
import { SponsorsComponent } from './conferences/conf2019/sponsors/sponsors.component'

export const EventsRouting = RouterModule.forChild([
  {path: 'conferences',
    redirectTo: '/events',
    pathMatch : 'full'
  },
  {path: 'conferences',
    component: ConferencesComponent,
    children : [
      {
        path : '2019',
        redirectTo: '/events/conferences/2019/home',
        pathMatch : 'full'
      },
      {
        path : '2019',
        component: Conf2019Component,
        children : [
          {path : 'home',
          component: ConfHomeComponent},
          {path : 'program',
          component: ProgramComponent},
          {path : 'workshops',
          component: WorkshopsComponent},
          {path : 'speakers',
          component: SpeakersComponent},
          {path : 'info',
          component: InfoComponent},
          {path : 'sponsors',
          component: SponsorsComponent}
        ]
      },
      {
        path : 'ng-vikings',
        component: NgVikingsComponent
      }
    ]
  },
  {
      path: '',
      component: EventsComponent
  }
   
]);
