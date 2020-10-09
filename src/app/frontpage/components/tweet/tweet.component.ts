import { Component, Input } from '@angular/core';
import { ITwitterMessage } from '../../../../models';

@Component({
  selector: 'tweet',
  styleUrls: ['./tweet.component.styl'],
  templateUrl: './tweet.component.html'
})

export class TweetComponent {
  @Input() tweet: ITwitterMessage;

  constructor() {}
}
