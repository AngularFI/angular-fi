import { RouterModule }  from '@angular/router';
import { EventsComponent } from './events.component';
import { ConferencesComponent } from './conferences/conferences.component'

export const EventsRouting = RouterModule.forChild([
  {path: 'conferences',
        component: ConferencesComponent
      },
              {
                  path: '',
                  component: EventsComponent
              }
   
]);
