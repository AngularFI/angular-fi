import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';
import { ContactRouting } from './contact.routing';

@NgModule({
  imports: [SharedModule, ContactRouting],
  declarations: [ContactComponent]
})

export class ContactModule {}
