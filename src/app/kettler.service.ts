import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KettlerService {

  constructor() { }


newsData = [
  {
    date: '16. Mai 2024',
    title: 'Ökostrom',
    description: 'Die firmeneigene Photovoltaikanlage auf dem Dach unserer Produktionshalle erzeugt jährlich 190.000 kWh und deckt damit ein Viertel unseres Gesamtverbrauchs. Den übrigen Bedarf decken wir durch 100% Ökostrom unseres örtlichen Versorgers.'
  },
  {
    date: '20. April 2024',
    title: 'Wir Suchen',
    description: 'Fest: Medientechnolge Druck Ausbildung: Medientechnologe Druck Fest: Medientechnologe Druckverarbeitung Ausbildung: Medientechnologe Druckverarbeitung Aushilfen für die Weiterverarbeitung! Eine ausführliche Beschreibung finden Sie weiter unten unter der Rubrik »JOBS«!'
  },
  {
    date: '2. März 2024',
    title: 'Schneller, flexibler, rentabler – die Bogenoffset-Druckmaschine',
    description: 'Die KOMORI LITHRONE GL-840P ist das Herzstück unseres Maschinenparks. Mit ihr bieten wir unseren Kunden nun noch hoch­wertigeren Service. Freuen Sie sich auf verkürzte Druckzeiten, besseres Ausdruck­verhalten (insbesondere auf Naturpapier), Veredelungs­möglichkeiten durch ein eingebautes Lackwerk und vieles mehr! Ganz nebenbei bietet die Komori auch ökologische Vorteile. Mehr erfahren Sie unter Bogenoffset.'
  },
  {
    date: '24. Dezember 2023',
    title: 'Fröhliche Weihnachten',
    description: 'Wir wünschen allen ein frohes Weihnachtsfest und einen guten Rutsch ins neue Jahr 2024. Ab dem 3. Januar 2024 sind wir wieder für Sie da.'
  }
  ,
  {
    date: '18. Juni 2023',
    title: 'Digitaldruck auf höchstem Niveau!',
    description: 'Mit der HP Indigo 12000 HD bieten wir brillante Druckqualität und höchste Flexibilität. Beeindruckende Details, lebendige Farben und vielfältige Materialoptionen machen sie zur perfekten Wahl für individuelle und hochwertige Druckprodukte. Entdecken Sie modernste Technologie und profitieren Sie von schneller Produktion und nachhaltigen Vorteilen!'
  }
]


offeringsData = [
  {
    img: './assets/img/offerings_01.jpg',
    title: 'Professional Service',
    description: 'Von der Anfrage bis zur Auslieferung stehen wir Ihnen beratend zur Seite. Wir unterstützen Sie in Materialfragen, konfigurieren den idealen Produktionsablauf und liefern Top-Qualität zu einem fairen Preis. Auf Wunsch auch innerhalb von 24 Stunden.'
  },  
  {
    img: './assets/img/offerings_02.jpg',
    title: 'Buchproduktion',
    description: 'Die Buchproduktion hat bei uns eine lange Tradition. Wir kennen die besonderen Anforderungen der Branche genau und bieten vom Layout bis zur individuellen Veredelung den passenden Service. Dank neuester Technik jetzt noch schneller und effizienter.'
  },  
  {
    img: './assets/img/offerings_03.jpg',
    title: 'Naturpapier',
    description: 'So gute Voraussetzungen für den optimalen Druck auf ungestrichenen Papieren bieten nur Wenige: Unser spezieller Uncoated Workflow für Offset- und Digitaldruck garantiert eine beeindruckende Farbwiedergabe und Qualität, die man fühlen kann.'
  },
]

}
