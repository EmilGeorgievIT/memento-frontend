import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  slides = [
    { img: "assets/images/slide-one.jpg" },
    { img: "assets/images/slide-two.jpg" },
    { img: "assets/images/slide-three.jpg" }
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  constructor() { 
  }

  ngOnInit() {
  }

}
