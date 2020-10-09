import { RouterModule }  from '@angular/router';
import { OrganizersComponent } from './organizers.component';

export const OrganizersRouting = RouterModule.forChild([
  {
    path: '',
    component: OrganizersComponent,
    pathMatch: 'full'
  }
]);
