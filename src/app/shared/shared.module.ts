import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe, LinkifyPipe, OrderByPipe } from './pipes';
import { MeetupsListComponent } from './components/meetups-list/meetups-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DatePipe,
    LinkifyPipe,
    OrderByPipe,
    MeetupsListComponent
  ],
  exports: [
    MeetupsListComponent,
    CommonModule,
    FormsModule,
    DatePipe,
    LinkifyPipe,
    OrderByPipe
  ]
})
export class SharedModule {}
