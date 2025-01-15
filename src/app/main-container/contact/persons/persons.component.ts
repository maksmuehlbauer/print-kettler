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
  isMenuOpen: boolean[] = [];

  toggleMenu(index: number) {
    // Initialisiere, falls der Zustand für den Index noch nicht existiert
    if (this.isMenuOpen[index] === undefined) {
      this.isMenuOpen[index] = false;
    }
    this.isMenuOpen[index] = this.isMenuOpen[index];
  }





}
