import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table } from './shared/table/table';
import { Creditur } from '../model/creditur.interface';
import { Form } from "./shared/form/form";
import { CrediturData } from './service/creditur-data';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Table,
    Form
], 
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [CrediturData]
})


export class App implements OnInit{
  protected title = 'angular-apps';
  name2: string = 'Willman'
  parentData : Creditur[] = []

  constructor(
    private crediturService : CrediturData
  ){}

  ngOnInit() : void {
    this.parentData = this.crediturService.getData()
  }


  myFunction(){
    let name = "Apis"
    this.name2 = name
  }
  

  receivedForm(item: Creditur) {
  this.crediturService.setData(item);
  this.parentData = this.crediturService.getData();
}

  handleDelete(index: number) {
  this.crediturService.deleteData(index);
  this.parentData = this.crediturService.getData();
}


// masih dapat digunakan tetapi business logic mau dipindahkan ke service
// receivedForm(e:Creditur){
//     this.parentData = [...this.parentData,e]
//   }

//   handleDelete(e:number){
//      this.parentData = this.parentData.filter((_, i) => i !== e);
//   }


  
  // handleEdit(e:number){

  // }
}
