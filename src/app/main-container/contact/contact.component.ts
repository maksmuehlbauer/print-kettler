import { Component } from '@angular/core';
import { RouteCalcComponent } from "./route-calc/route-calc.component";
import { MsgFormComponent } from "./msg-form/msg-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouteCalcComponent, MsgFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
