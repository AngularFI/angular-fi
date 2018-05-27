import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pagenotfound.component';
import { PageNotFoundRouting } from './pagenotfound.routing';

@NgModule({
  imports: [SharedModule, PageNotFoundRouting],
  declarations: [PageNotFoundComponent]
})

export class PageNotFoundModule {}
