import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KettlerService } from '../../kettler.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

newsServiceData = inject(KettlerService)
hoverLeft: boolean = false;
hoverRight: boolean = false;

startIndex = 0
itemsPerPage = 3
allNewsLength = this.newsServiceData.newsData.length

animationState: 'in' | 'out' = 'in';


nextNews() {
  this.animationState = 'out';
  setTimeout(() => {
      this.startIndex += this.itemsPerPage;
      if (this.startIndex >= this.allNewsLength) {
          this.startIndex = 0;
      }
      this.animationState = 'in';
  }, 500);
}

prevNews() {
  this.animationState = 'out';
  setTimeout(() => {
      this.startIndex -= this.itemsPerPage;
      if (this.startIndex < 0) {
          this.startIndex = this.allNewsLength - this.itemsPerPage;
      }
      this.animationState = 'in';
  }, 500);
}
  
}

