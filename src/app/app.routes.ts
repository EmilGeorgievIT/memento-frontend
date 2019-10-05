import { Routes } from '@angular/router';


export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './main/modules/main.module#MainModule'
    },
    // { path: '404',  component: PageNotFound },
    { path: '**',  redirectTo: '404' },
];

