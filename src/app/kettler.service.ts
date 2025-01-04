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


  underCategoryData = {
    sheetFedOffsetData: {
      mainTitle: 'Bogenoffset',
      mainDescription: 'Der Bogenoffsetdruck bietet optimale Druckqualität für unterschiedlichste Produkte – von Akzidenzen wie Visitenkarten, Briefbögen und Broschüren bis hin zu umfangreichen Geschäftsberichten und Büchern. Besonders für höhere Auflagen empfiehlt sich diese schnelle, flexible und rentable Druckmethode.',
      sliderArray: [
        './assets/img/leistungen-bogenoffset-slider-01.jpg',
        './assets/img/leistungen-bogenoffset-slider-03.jpg',
        './assets/img/leistungen-bogenoffset-slider-04.jpg'
      ],
      cardInfos: [
        {
          img: './assets/img/sizetypes.png',
          title: 'Formatvielfalt',
          description: 'Mit unserer 3B‑Bogenoffset-Druckmaschine sind wir in der Lage, Bogenformate bis 720 x 1.030 mm Größe und Materialstärken von 0,04 bis 0,8 mm in brillanter Qualität zu bedrucken. Damit ist von der Visitenkarte bis zum Werbeplakat wirklich alles möglich.'
        },
        {
          img: './assets/img/color-precision.png',
          title: 'Farbpräzision',
          description: 'Wir stellen laufend die Farbverbindlichkeit Ihrer Drucke sicher: Vom konsequenten Colour Management durch ICC‑Profile über zertifizierte Proofs bis hin zum anspruchsvollen Druck mit frequenzmoduliertem Raster (FM‑Raster) tun wir alles für Ihr Produkt.'
        },
        {
          img: './assets/img/special-color.png',
          title: 'Schmuckfarbe',
          description: 'Durch den Einsatz von HKS- und Pantone-Sonderfarben ist es möglich, auch außerhalb des normalerweise umsetzbaren Farbbereichs zu drucken. Bei uns geschieht das mit bis zu 8 Farbwerken und schnell trocknender UV‑Farbe effizient in nur einem Durchlauf.'
        },
        {
          img: './assets/img/certified.png',
          title: 'Zertifikate',
          description: 'Unser Unternehmen ist FOGRA/UGRA-zertifiziert. Das garantiert die gleichbleibende Qualität bei der Farbwiedergabe von Prüfdrucken. Dass wir darüber hinaus auch den Umweltschutz ernst nehmen, zeigt unsere Zertifizierung nach FSC® und PEFC‑Richtlinien.'
        }
      ]
    },
    digitalPrintData: {
      mainTitle: 'Digitaldruck',
      mainDescription: 'Mit unserer HP Indigo 12000 HD eröffnen wir Ihnen neue Möglichkeiten in den Bereichen Personalisierung, Druckveredelung und Farbauswahl. Selbst Kleinstauflagen, speziell bei Buchproduktionen, sind kosteneffizient umsetzbar. Die hochauflösende HD-Drucktechnologie sorgt für weichere, moiréfreie Drucke mit verbesserter Detaildarstellung.',
      sliderArray: [
        './assets/img/leistungen-digitaldruck-slider-02.jpg',
        './assets/img/leistungen-digitaldruck-slider-01.jpg',
        './assets/img/leistungen-digitaldruck-slider-03.jpg'
      ],
      cardInfos: [
        {
          img: './assets/img/time.png',
          title: 'Kurzfristig',
          description: 'Im Digitaldruck werden die Druckdaten direkt vom Computer an die Druckmaschine übertragen. So ergeben sich deutlich kürzere Rüstzeiten. Aufträge können schnell und flexibel durchgeführt werden. Auch kleine Auflagen lassen sich wirtschaftlich umsetzen.'
        },
        {
          img: './assets/img/individuel.png',
          title: 'Indviduell',
          description: 'Ein weiterer Vorteil: Jeder Bogen kann anders bedruckt werden. Das ermöglicht die Personalisierung Ihrer Printmedien, von der namentlichen Anrede bis hin zu inhaltlich abgestimmten Textpassagen für die persönliche, zielgruppengerechte Ansprache.'
        },
        {
          img: './assets/img/quality.png',
          title: 'Druckqualität',
          description: 'Auch digital gedruckte Printmedien bestechen bei uns durch brillante, lebendige Farben. Wir können Digitalfotos in echter Fotoqualität produzieren und halten zudem das komplette Spektrum der PANTONE-Palette und andere Wunsch- und Spezialfarben bereit.'
        },
        {
          img: './assets/img/selection.png',
          title: 'Papierauswahl',
          description: 'In unserem breiten Sortiment an Bedruckstoffen finden Sie bestimmt das geeignete Material für Ihr Produkt. Unterschiedliche gestrichene und ungestrichene Papiere, Etiketten, Folien und Spezialpapiere in verschiedensten Grammaturen stehen zur Wahl.'
        }
      ]
    }
  };

  getSheedFedOffsetData() {
    return this.underCategoryData.sheetFedOffsetData;
  }

  getDigitalPrintData() {
    return this.underCategoryData.digitalPrintData;
  }


}
