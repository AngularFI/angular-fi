import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'registration-button',
  templateUrl: './registration-button.component.html',
  styleUrls: ['./registration-button.component.css']
})
export class RegistrationButtonComponent implements OnInit {

  @Input() ticketUrl : string;
  @Input() buttonText : string;

  constructor() { }

  ngOnInit() {
  }

}
