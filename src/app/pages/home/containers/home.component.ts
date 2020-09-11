import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero/hero.model';
import { Feature } from 'src/app/models/hero/feature.model';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  hero: Hero = {
    heading: "Jenova Bikes",
    subHeading:
      "Jenova Bikes is designed to help you find the stations nearest to you and provide real-time information on the amount of avaiable bikes and free spaces",
    backgroundImage: "../../assets/images/Dublin_Bikes.jpg",
  };

  featureOne: Feature = {
    heading: "Coloured-coded Stations",
    text: `Morbi vitae pharetra magna. Nunc ultricies id leo vel hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
           Quisque commodo, leo at dignissim porta, lectus magna ultricies nunc, a faucibus leo massa ut ligula. Phasellus at hendrerit lectus. Maecenas fermentum ultricies sodales.`,
    image:
      "https://firebasestorage.googleapis.com/v0/b/jenovabikes.appspot.com/o/Map.PNG?alt=media&token=c4a6b073-6799-4958-b6f2-1567bc1f0778",
    isReversed: false
  };

  featureTwo: Feature = {
    heading: "Coloured-coded Stations",
    text: `Morbi vitae pharetra magna. Nunc ultricies id leo vel hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
           Quisque commodo, leo at dignissim porta, lectus magna ultricies nunc, a faucibus leo massa ut ligula. Phasellus at hendrerit lectus. Maecenas fermentum ultricies sodales.`,
    image:
      "https://firebasestorage.googleapis.com/v0/b/jenovabikes.appspot.com/o/Map.PNG?alt=media&token=c4a6b073-6799-4958-b6f2-1567bc1f0778",
    isReversed: true
  };

  constructor() { }

  ngOnInit(): void { }
}
