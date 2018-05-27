import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePipe, LinkifyPipe, OrderByPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DatePipe,
    LinkifyPipe,
    OrderByPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    DatePipe,
    LinkifyPipe,
    OrderByPipe
  ]
})
export class SharedModule {}
