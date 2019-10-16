import { Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';


export const HomeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    component: MainComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { path: 'register',
    component: RegisterComponent 
  },
  { path: '404',
    component: NotFoundComponent 
  },
  { path: '**',  
   redirectTo: '404' 
  }
];
