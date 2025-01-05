import { Component, inject } from '@angular/core';
import { KettlerService } from '../../kettler.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.scss'
})
export class PerformanceComponent {

  categoryData = inject(KettlerService);

}
