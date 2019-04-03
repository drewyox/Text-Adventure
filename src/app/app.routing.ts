import { ModuleWithProviders } from '@angular/core';
import  { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StartComponent } from './start/start.component';
import { BridgeComponent } from './bridge/bridge.component';
import { BrokenCartComponent } from './broken-cart/broken-cart.component';
import { ForestEnterComponent} from './forest-enter/forest-enter.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path:'start',
    component: StartComponent
  },
  {
    path:'bridge',
    component: BridgeComponent
  },
  {
    path: 'brokenCart',
    component: BrokenCartComponent
  },
  {
    path: 'forestEnter',
    component: ForestEnterComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
