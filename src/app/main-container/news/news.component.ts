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

startIndex = 0
itemsPerPage = 3
allNewsLength = this.newsServiceData.newsData.length

nextNews() {
  this.startIndex += this.itemsPerPage;
  if (this.startIndex > this.allNewsLength) {
    this.startIndex = 0
  }
}

prevNews() {
  this.startIndex -= this.itemsPerPage
  if (this.startIndex < 0) {
    this.startIndex = 0
  }
}

  
}

