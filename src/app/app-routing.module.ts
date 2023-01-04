import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SimulationsComponent } from './simulations/simulations.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Home'
  },
  {
    path: 'project',
    component: ProjectComponent, 
    pathMatch: 'full',
    title: 'Textbook'
  },
  {
    path: 'simulations',
    component: SimulationsComponent, 
    pathMatch: 'full',
    title: 'Simulations'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: ':any',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
