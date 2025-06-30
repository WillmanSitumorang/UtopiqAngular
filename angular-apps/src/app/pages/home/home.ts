import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'

})
export class Home {
  constructor(private router:Router){}

  goToForm(){
    this.router.navigate(['form'])
  }
  goToTable(){
    this.router.navigate(['tabel'])
  }
}
