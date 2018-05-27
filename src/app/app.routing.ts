import { RouterModule } from '@angular/router';

export const AppRouting = RouterModule.forRoot([
  { path: '', pathMatch: 'full', loadChildren: './frontpage/frontpage.module#FrontpageModule' },
  { path: 'organizers', loadChildren: './organizers/organizers.module#OrganizersModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '404', loadChildren: './pagenotfound/pagenotfound.module#PageNotFoundModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/404' }
]);
