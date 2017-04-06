import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./organizers.component.styl'],
  templateUrl: './organizers.component.pug'
})

export class OrganizersComponent {
  constructor() {}
}
