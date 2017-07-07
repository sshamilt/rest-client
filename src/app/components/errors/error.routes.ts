import { Routes } from '@angular/router';
import { App404Component } from './app-404.component';

export const ErrorRoutes: Routes = [
    {
      path: '**', 
      component: App404Component
      
    }
];