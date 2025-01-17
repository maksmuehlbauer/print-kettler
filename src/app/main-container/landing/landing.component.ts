import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  ngOnInit() {
    this.startSlider();
  }

  sliderArray: string[] = [
    './assets/img/slider_01.jpg', 
    './assets/img/slider_02.jpg', 
    './assets/img/slider_03.jpg', 
    './assets/img/slider_04.jpg', 
  ]

  currentIndex: number = 0;

    
  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.sliderArray.length;
    }, 5000);
  }




}







