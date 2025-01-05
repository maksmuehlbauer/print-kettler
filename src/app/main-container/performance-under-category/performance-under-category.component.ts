import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KettlerService } from '../../kettler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-performance-under-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-under-category.component.html',
  styleUrl: './performance-under-category.component.scss'
})
export class PerformanceUnderCategoryComponent implements OnInit {

  constructor (
    private route: ActivatedRoute,
  ) {}

  catData: any;
  currentIndex: number = 0
  ucData = inject(KettlerService)


  ngOnInit() {
    this.startSlider();
    this.getRouteParameter();
  }


  getRouteParameter() {
    this.route.params.subscribe(params => {
      const type = params['type'];
      this.loadData(type);
    }); 
  }


  loadData(type: string) {
    if (type === 'sheetfedoffset') {
      this.catData = this.ucData.getSheedFedOffsetData();
    } else if (type === 'digitalprint') {
      this.catData = this.ucData.getDigitalPrintData();
    }
  }


  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.ucData.underCategoryData.sheetFedOffsetData.sliderArray.length;
    }, 3000);
  }
  

  showImageIndex(i: number) {
    this.currentIndex = i
  }
}
