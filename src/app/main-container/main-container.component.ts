import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";
import { NewsComponent } from "./news/news.component";
import { OfferingsComponent } from "./offerings/offerings.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [HeaderComponent, LandingComponent, NewsComponent, OfferingsComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
