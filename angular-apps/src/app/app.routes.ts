import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { NotFound } from './pages/not-found/not-found';
import { FormPage } from './pages/form-page/form-page';
import { TabelCreditur } from './pages/tabel-creditur/tabel-creditur';
import { DetailCrediturPage } from './pages/detail-creditur-page/detail-creditur-page';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path:'login', component : Login},
    {path:'home', component : Home},
    {path:'form', component : FormPage},
    {path:'about-us', component : AboutUs},
    {path:'tabel', component : TabelCreditur},
    {path: 'detail/:id', component: DetailCrediturPage },
    {path:'404', component : NotFound},
    {path:'**', redirectTo: '404'},
];


