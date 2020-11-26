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
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti eos voluptatum exercitationem sit recusandae quae provident rerum beatae.'
    },
    {
      'title': 'Desarrollo de aplicaciones',
      'icon': 'fal fa-mobile',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti eos voluptatum exercitationem sit recusandae quae provident rerum beatae.'
    },
    {
      'title': 'Diseño e imagen corporativa',
      'icon': 'fal fa-ruler',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti eos voluptatum exercitationem sit recusandae quae provident rerum beatae.'
    },
    {
      'title': 'Soporte y mantenimiento',
      'icon': 'fal fa-wrench',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti eos voluptatum exercitationem sit recusandae quae provident rerum beatae.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
