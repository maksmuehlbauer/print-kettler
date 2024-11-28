import { Component, inject } from '@angular/core';
import { KettlerService } from '../../kettler.service';

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.scss'
})
export class OfferingsComponent {

offeringsServiceData = inject(KettlerService)

}
