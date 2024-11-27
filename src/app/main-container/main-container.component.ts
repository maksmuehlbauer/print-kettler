import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";
import { NewsComponent } from "./news/news.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [HeaderComponent, LandingComponent, NewsComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
