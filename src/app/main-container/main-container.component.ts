import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./landing/landing.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [HeaderComponent, LandingComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
