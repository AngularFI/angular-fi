import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./contact.component.styl'],
  templateUrl: './contact.component.html'
})

export class ContactComponent {
  constructor() {}
}
