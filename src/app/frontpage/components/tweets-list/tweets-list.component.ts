import { Component } from '@angular/core';
import { TwitterService } from '../../../core/services';
import { ITwitterMessage } from '../../../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'tweets-list',
  styleUrls: ['./tweets-list.component.styl'],
  templateUrl: './tweets-list.component.html'
})

export class TweetsListComponent {
  tweets: Observable<ITwitterMessage[]>;

  constructor(private twitterService: TwitterService) {
    this.tweets = this.twitterService.tweets('#AngularFI');
  }
}
