import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { NotFound } from './pages/not-found/not-found';
import { FormPage } from './pages/form-page/form-page';
import { TabelCreditur } from './pages/tabel-creditur/tabel-creditur';
import { DetailCrediturPage } from './pages/detail-creditur-page/detail-creditur-page';
import { Login } from './pages/login/login';
import { DetailCreditur } from './shared/detail-creditur/detail-creditur';
import { AuthGuard } from './service/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: 'form', component: FormPage, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUs, canActivate: [AuthGuard] },
  { path: 'tabel', component: TabelCreditur, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailCrediturPage, canActivate: [AuthGuard] },
  { path: '404', component: NotFound },
  { path: '**', redirectTo: '404' },
];


