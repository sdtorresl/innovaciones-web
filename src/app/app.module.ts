import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TopMenuComponent } from './components/shared/top-menu/top-menu.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProyectItemComponent } from './components/proyect-item/proyect-item.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopMenuComponent,
    ServicesComponent,
    ContactUsComponent,
    ProyectsComponent,
    ProyectItemComponent,
    ServiceItemComponent,
    SliderComponent,
    SolutionsComponent
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
