import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  ngOnInit() {
    this.startSlider()
  }

  sliderArray = [
    './assets/img/slider_01.jpg', 
    './assets/img/slider_02.jpg', 
    './assets/img/slider_03.jpg', 
    './assets/img/slider_04.jpg', 
  ]

  currentIndex = 0;

    
  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.sliderArray.length;
    }, 5000); // Bild alle 3 Sekunden wechseln
  }




}







