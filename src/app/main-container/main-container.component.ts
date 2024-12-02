import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";
import { NewsComponent } from "./news/news.component";
import { OfferingsComponent } from "./offerings/offerings.component";
import { ExpierienceComponent } from "./expierience/expierience.component";
import { QAndAComponent } from "./q-and-a/q-and-a.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [HeaderComponent, LandingComponent, NewsComponent, OfferingsComponent, ExpierienceComponent, QAndAComponent, FooterComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
