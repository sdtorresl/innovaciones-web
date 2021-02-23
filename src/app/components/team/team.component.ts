import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

  moveLeft(event) {
    event.preventDefault();
    this.ds.moveLeft();
  }

  moveRight(event) {
    event.preventDefault();
    this.ds.moveRight();
  }

}
