import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { carouselHome, Slide } from './../../models/carousel-home';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(1.2)' }),
        animate('750ms', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition('void => *', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  slides: Slide[] = carouselHome;
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
    window.setInterval(() => this.backgroundSwitch(), 6000);
  }

  backgroundSwitch() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
