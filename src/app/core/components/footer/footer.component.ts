import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'footer',
  styleUrls: ['./footer.component.styl'],
  templateUrl: './footer.component.pug'
})

export class FooterComponent {
  constructor() {}
}
