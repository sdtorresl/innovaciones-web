import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  intro = 'Queremos contarte sobre nosotros, estas son las caracteristicas de nuestro equipo';

  advantages = [
    {
      'icon': 'fal fa-robot',
      'title': 'Estamos en vanguardia',
      'description': 'Hacemos uso de tecnologías de vanguardia, usadas alrededor del mundo y en los mejores portales.'
    },
    {
      'icon': 'fal fa-id-card',
      'title': 'Nos importa el diseño y el usuario',
      'description': '¿Te gusta el diseño de nuestra página? trabajamos por crear una buena interfaz con diseño centrado en el usuario.'
    },
    {
      'icon': 'fal fa-rocket',
      'title': 'Nos gustan los retos',
      'description': 'Te ayudamos a crear productos elaborados a tu medida, desarrollamos el producto ideal para solventar las necesidades de tu empresa.'
    },
    {
      'icon': 'fal fa-quote-left',
      'title': 'Siempre escuchamos',
      'description': '¿Tienes una idea que quieres trabajar? traéla, te guiamos, te asesoramos y la desarrollamos con las mejores práticas.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
