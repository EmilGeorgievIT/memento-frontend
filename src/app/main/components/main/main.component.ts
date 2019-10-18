import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  slides = [
    {
      img: "assets/images/slide-one.jpg",
      link: 'estate/1'
    },
    {
      img: "assets/images/slide-two.jpg",
      link: 'estate/2'
    },
    {
      img: "assets/images/slide-three.jpg",
      link: 'estate/2'
    }
  ];

  slideConfig = { 
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "arrows": false,
    "fade": true,
    "cssEase": 'linear',
    "dots": false
  };

  constructor() {
  }

  ngOnInit() {
  }

}
