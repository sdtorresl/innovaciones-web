import { Component, OnInit } from '@angular/core';
import { carouselHome } from './../../models/carousel-home';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  carouselHome = carouselHome;

  constructor() { }

  ngOnInit(): void {
  }

}
