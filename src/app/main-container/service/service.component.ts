import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  scrollTo(linkId: string): void {
    const element = document.getElementById(linkId);
    if (element) {
      const yOffset = -128;
      const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }

}
