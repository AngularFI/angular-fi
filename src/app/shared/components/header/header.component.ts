import { Component, ChangeDetectionStrategy, ViewEncapsulation, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'header',
  styleUrls: ['./header.component.styl'],
  templateUrl: './header.component.pug'
})

export class HeaderComponent {
  @HostBinding('class.loading') @Input('loading') loading: boolean;

  constructor(public router: Router) {}
}
