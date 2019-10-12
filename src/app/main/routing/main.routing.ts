import { Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';


export const HomeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: MainComponent },
  { path: '404',  component: NotFoundComponent },
  { path: '**',  redirectTo: '404' }
];
