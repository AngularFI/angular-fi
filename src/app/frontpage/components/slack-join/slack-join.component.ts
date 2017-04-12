import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

import { SlackService } from '../../../core/services';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'slack-join',
  styleUrls: ['./slack-join.component.styl'],
  templateUrl: './slack-join.component.pug'
})

export class SlackJoinComponent {
  email: string = "";
  error: string = "";
  sending: boolean = false;
  sent: boolean = false;
  success: boolean = false;

  constructor(private slackService: SlackService) {}

  join() {
    this.success
    this.sending = true;
    this.error = "";
    this.slackService.invite(this.email)
      .subscribe(success => {
        this.email = "";
        this.sending = false;
        if (success) {
          this.success = true;
        } else {
          this.success = false;
          this.error = "Failed to send invitation. You might already have asked for invitation.";
        }
      })
  }
}
