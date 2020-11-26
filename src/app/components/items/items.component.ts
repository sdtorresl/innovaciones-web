import { Component, Input, OnInit } from '@angular/core';

interface item {
  icon : string,
  title : string,
  description : string
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() items : item[];
  @Input() intro : string;

  constructor() { }

  ngOnInit(): void {
  }

}
