import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

export const ContactRouting = RouterModule.forChild([
  {
    path: '',
    component: ContactComponent,
    pathMatch: 'full'
  }
]);