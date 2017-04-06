import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

import { ITwitterMessage } from '../../../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'tweet',
  styleUrls: ['./tweet.component.styl'],
  templateUrl: './tweet.component.pug'
})

export class TweetComponent {
  @Input() tweet: ITwitterMessage;

  constructor() {}
}
