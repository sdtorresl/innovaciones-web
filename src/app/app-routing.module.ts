import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'home'} },
  { path: 'solutions', component: SolutionsComponent, data: {animation:'solutions'} },
  { path: 'about', component: AboutComponent, data: {animation:'about'} },
  { path: 'contact-us', component: ContactUsComponent, data: {animation: 'contact-us'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
