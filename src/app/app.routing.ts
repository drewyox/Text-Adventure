import { ModuleWithProviders } from '@angular/core';
import  { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path:'start',
    component: StartComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
