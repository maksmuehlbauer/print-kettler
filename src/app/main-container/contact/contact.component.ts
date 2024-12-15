import { Component } from '@angular/core';
import { RouteCalcComponent } from "./route-calc/route-calc.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouteCalcComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
