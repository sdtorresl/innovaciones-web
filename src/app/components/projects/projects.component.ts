import { projects } from './../../models/projects';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit(): void {

  }

}
