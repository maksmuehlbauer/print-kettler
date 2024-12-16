import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KettlerService {

  constructor() { }

  contactPersonData = [
    {
      name: "Gunnar Kettler",
      titleOne: "Geschäftsführung",
      phone: "02383 910 13-13",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/gunnar_kettler.jpg"
    },
    {
      name: "Marvin Prang",
      titleOne: "Assistenz der Geschäftsführung",
      titleTwo: "Prokurist",
      phone: "02383 910 13-25",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/marvin_prang.jpg"
    },
    {
      name: "Max Mühlbauer",
      titleOne: "Kundenbetreuung",
      titleTwo: "Auftragsabwicklung",
      titleThree: "Web to Print",
      phone: "02383 910 13-10",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/max_muehlbauer.jpeg"
    },
    {
      name: "Jens Schulze",
      titleOne: "Kundenbetreuung",
      titleTwo: "Auftragsabwicklung",
      phone: "02383 910 13-30",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/jens_schulze.jpg"
    },
    {
      name: "Nicole Hucke",
      titleOne: "Buchhaltung",
      phone: "02383 910 13-18",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/nicole-hucke.jpg"
    },
    {
      name: "Corinna Beutel",
      titleOne: "Buchhaltung",
      phone: "02383 910 13-17",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/corinna_beutel.jpg"
    },
    {
      name: "Jonas Sandhoff",
      titleOne: "Kundenbetreuung",
      titleTwo: "Auftragsabwicklung",
      phone: "02383 910 13-38",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/jonas_sandhoff.jpg"
    },
    {
      name: "Anne Kettler",
      titleOne: "Grafik",
      titleTwo: "Design",
      phone: "02383 910 13-34",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/anne_kettler.jpg"
    },
    {
      name: "Uwe Klein",
      titleOne: "Druckvorstufe",
      phone: "02383 910 13-12",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/uwe-klein.jpg"
    },
    {
      name: "Christiane Buchholz",
      titleOne: "Druckvorstufe",
      phone: "02383 910 13-12",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/christiane-buchholz.jpg"
    },
    {
      name: "Kevin Kretzer",
      titleOne: "Digitaldruck",
      phone: "02383 910 13-24",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/kevin_kretzer.jpg"
    },
    {
      name: "Jenifer Stürtz",
      titleOne: "Digitaldruck",
      phone: "02383 910 13-24",
      email: "info@druckerei-kettler.de",
      img: "./assets/img/jenifer_stuertz.jpg"
    }
  ];
  

  




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
