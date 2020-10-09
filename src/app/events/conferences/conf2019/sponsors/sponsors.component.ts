import { Component, OnInit } from '@angular/core';
import { SponsorImage } from '../../../../../models/sponsor.model';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})

export class SponsorsComponent implements OnInit {

  
  public randomNumber : any;
  public sponsorImages : SponsorImage[] = [{
    src:'/assets/images/events/conferences/2019/ng-vikings-in-finland-2018-img008-sponsorship-widescreen.jpg',
    alt: 'Sponsors at the 2018 ng-vikings conference in Finland'
  },
  {
    src:'/assets/images/events/conferences/2019/ng-vikings-in-finland-2018-img009-sponsorship-widescreen.jpg',
    alt: 'Sponsors at the 2018 ng-vikings conference in Finland'
  },
  {
    src:'/assets/images/events/conferences/2019/ng-vikings-in-finland-2018-img010-sponsorship-widescreen.jpg',
    alt: 'Sponsors at the 2018 ng-vikings conference in Finland'
  },
  {
    src:'/assets/images/events/conferences/2019/ng-vikings-in-finland-2018-img011-sponsorship-widescreen.jpg',
    alt: 'Sponsors at the 2018 ng-vikings conference in Finland'
  }];



  constructor() { 

    this.randomNumber = Math.floor(Math.random()*4);
  


  }

  ngOnInit() {

    console.log('sponsorImages: '+this.sponsorImages);

  }

}
