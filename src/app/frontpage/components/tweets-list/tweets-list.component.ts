import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { TwitterService } from '../../../shared/services';

import { ITwitterMessage } from '../../../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'tweets-list',
  styleUrls: ['./tweets-list.component.styl'],
  templateUrl: './tweets-list.component.pug'
})

export class TweetsListComponent {
  tweets: ITwitterMessage[];

  constructor(private twitterService: TwitterService) {
    this.twitterService.tweets('#AngularFI').subscribe( tweets => {
      this.tweets = tweets;
    });
  }
}
