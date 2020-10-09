import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrganizersComponent } from './organizers.component';
import { OrganizersRouting } from './organizers.routing';

@NgModule({
  imports: [SharedModule, OrganizersRouting],
  declarations: [OrganizersComponent]
})

export class OrganizersModule {}
