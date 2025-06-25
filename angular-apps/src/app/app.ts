import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from './shared/table/table';
import { Creditur } from '../model/creditur.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Table,
    FormsModule
  ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  protected title = 'angular-apps';
  name2: string = 'Willman'
  parentData : Creditur[] = [
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
    },
    {
      name : "Willman",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
    },
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
    },
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
    },
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
    }
  ]

  dataFromChildren: string =''
  imgUrl: string = 'https://picsum.photos/200/300'

  
  myFunction(){
    let name = "Apis"
    this.name2 = name
  }
  
  received(e:string){
    this.dataFromChildren = e
  }
  
}
