import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero/hero.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hero: Hero = {
    heading: 'Jenova Bikes',
    subHeading: 'Jenova Bikes is designed to help you find the stations nearest to you and provide real-time information on the amount of avaiable bikes and free spaces',
    backgroundImage: '../../assets/images/Dublin_Bikes.jpg',
  };

  constructor() { }

  ngOnInit(): void { }
}
