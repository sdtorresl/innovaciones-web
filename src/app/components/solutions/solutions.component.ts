import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  intro = 'En Innovaciones creamos productos digitales para impulsar tu negocio';

  services = [
    {
      'title': 'Consultorias',
      'icon': 'fal fa-user-alt',
      'description': 'Somos expertos en UX y TI. ¿Necesitas ayuda? cuenta con la experiencia de nuestros profesionales para acelerar la transformación digital de tu empresa.'
    },
    {
      'title': 'Desarrollo de aplicaciones',
      'icon': 'fal fa-mobile',
      'description': 'Diseñamos y desarrollamos e implementamos aplicaciones web y móviles de acuerdo a los requerimientos de tu empresa.'
    },
    {
      'title': 'Diseño e imagen corporativa',
      'icon': 'fal fa-ruler',
      'description': 'No solamente diseñamos, recolectamos información y ponemos a prueba la experiencia de usuario para garantizar que la información se transmite adecuadamente.'
    },
    {
      'title': 'Soporte y mantenimiento',
      'icon': 'fal fa-wrench',
      'description': 'Déjanos el monitoreo, la operación, el soporte y mantenimiento en manos profesionales mientras te enfocas en lo que realmente es importante.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
