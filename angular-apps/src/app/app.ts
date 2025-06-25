import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from './shared/table/table';
import { Creditur } from '../model/creditur.interface';
import { FormsModule } from '@angular/forms';
import { Form } from "./shared/form/form";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Table,
    Form
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


  
  myFunction(){
    let name = "Apis"
    this.name2 = name
  }
  

  receivedForm(e:Creditur){
    this.parentData = [...this.parentData,e]
  }

  handleDelete(e:number){
     this.parentData = this.parentData.filter((_, i) => i !== e);
  }
  
  // handleEdit(e:number){

  // }
}
