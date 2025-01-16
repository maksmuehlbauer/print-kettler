import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-route-calc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './route-calc.component.html',
  styleUrl: './route-calc.component.scss'
})
export class RouteCalcComponent {

  hovered: boolean = false
  startAdress: string = ''
  destination: string = 'Druck Verlag Kettler GmbH, Robert-Bosch-Straße 14, 59199 Bönen';

  openGoogleMaps() {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(this.startAdress)}&destination=${encodeURIComponent(this.destination)}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank')
  }

}
