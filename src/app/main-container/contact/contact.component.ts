import { Component } from '@angular/core';
import { RouteCalcComponent } from "./route-calc/route-calc.component";
import { MsgFormComponent } from "./msg-form/msg-form.component";
import { PersonsComponent } from "./persons/persons.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouteCalcComponent, MsgFormComponent, PersonsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
