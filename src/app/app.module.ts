import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DesignProcessComponent } from './components/design-process/design-process.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { ServicesComponent } from './components/services/services.component';
import { SliderComponent } from './components/slider/slider.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TopMenuComponent } from './components/shared/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactUsComponent,
    DesignProcessComponent,
    HomeComponent,
    ProjectItemComponent,
    ProjectsComponent,
    ServiceItemComponent,
    ServicesComponent,
    SliderComponent,
    SolutionsComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
