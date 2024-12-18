import { Component } from '@angular/core';
import { HeadPartComponent } from "./head-part/head-part.component";
import { DividerComponent } from "./divider/divider.component";
import { BottomPartComponent } from "./bottom-part/bottom-part.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeadPartComponent, DividerComponent, BottomPartComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
