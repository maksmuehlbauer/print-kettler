import { Component } from '@angular/core';
import { HeadPartComponent } from "./head-part/head-part.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeadPartComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
