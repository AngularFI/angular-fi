import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  styleUrls: ['./header.component.styl'],
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @HostBinding('class.loading') @Input('loading') loading: boolean;

  constructor(public router: Router) {}
}
