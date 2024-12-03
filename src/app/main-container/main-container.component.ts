import { Component } from '@angular/core';
import { LandingComponent } from "./landing/landing.component";
import { NewsComponent } from "./news/news.component";
import { OfferingsComponent } from "./offerings/offerings.component";
import { ExpierienceComponent } from "./expierience/expierience.component";
import { QAndAComponent } from "./q-and-a/q-and-a.component";


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [LandingComponent, NewsComponent, OfferingsComponent, ExpierienceComponent, QAndAComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
