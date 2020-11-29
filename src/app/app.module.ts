import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { BannerComponent } from './components/banner/banner.component';
import { AppearDirective } from './directives/appear.directive';
import { ItemsComponent } from './components/items/items.component';

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
    TopMenuComponent,
    BannerComponent,
    AppearDirective,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
