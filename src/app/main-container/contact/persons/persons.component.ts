import { Component, inject } from '@angular/core';
import { KettlerService } from '../../../kettler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})
export class PersonsComponent {

contactPersons = inject(KettlerService)


}
