import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  styleUrls: ['./app.component.styl'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  loading: boolean = true;

  constructor() {
    setTimeout(() => this.loading = false, 2500);
  }
}
