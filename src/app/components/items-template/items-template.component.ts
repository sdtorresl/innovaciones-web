import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-template',
  templateUrl: './items-template.component.html',
  styleUrls: ['./items-template.component.scss']
})
export class ItemsTemplateComponent implements OnInit {

  @Input() intro : string;
  @Input() icon : string;
  @Input() title : string;
  @Input() itemDescription : string;

  constructor() { }

  ngOnInit(): void {
  }

}
