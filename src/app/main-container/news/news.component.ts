import { Component, inject } from '@angular/core';
import { KettlerService } from '../../kettler.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

newsServiceData = inject(KettlerService)

}
