import { RouterModule } from '@angular/router';
import { GetinvolvedComponent } from './getinvolved/getinvolved.component';

export const AppRouting = RouterModule.forRoot([
  { path: '', pathMatch: 'full', loadChildren: './frontpage/frontpage.module#FrontpageModule' },
  { path: 'organizers', loadChildren: './organizers/organizers.module#OrganizersModule' },
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'get-involved', component: GetinvolvedComponent, },
  { path: '2019', pathMatch: 'full', redirectTo: '/events/conferences/2019/home' },
  { path: '404', loadChildren: './pagenotfound/pagenotfound.module#PageNotFoundModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
]);
