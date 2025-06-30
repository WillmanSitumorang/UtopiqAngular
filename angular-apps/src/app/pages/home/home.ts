import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { Auth } from '../../service/auth/auth';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'

})
export class Home {
  constructor(
    private router:Router,
    private authService: Auth
  ){}

  goToForm(){
    this.router.navigate(['form'])
  }
  goToTable(){
    this.router.navigate(['tabel'])
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
