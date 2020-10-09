import { RouterModule }  from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';

export const PageNotFoundRouting = RouterModule.forChild([
  {
    path: '',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
]);
