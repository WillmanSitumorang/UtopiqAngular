import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Table } from './shared/table/table';
import { Creditur } from '../model/creditur.interface';
import { Form } from "./shared/form/form";
import { CrediturData } from './service/creditur/creditur-data';
import { Api } from './service/api/api';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    // Table,
    // Form,
    RouterModule
], 
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [CrediturData]
})


export class App {
  protected title = 'angular-apps';
  name2: string = 'Willman'
  // parentData : Creditur[] = []
  // wordingMessage : string =''

  // constructor(
  //   private crediturService : CrediturData,
  //   // private apiService : Api,
  //   private cdRef : ChangeDetectorRef
  // ){}



  
  // ngOnInit() : void {
  //   this.getData()
  // }

  // getData(){
  //   this.apiService.getData().subscribe((data:any)=>{
  //     console.log(data)
  //     this.wordingMessage = 'sukses mengambil data dari API'
  //     this.parentData = data
  //     // this.cdRef.detectChanges()
  //   },(error) =>{
  //     console.error("Error Fetching Data", error)
  //     this.wordingMessage = 'gagal mengambil data dari API'
  //   })
  // }

//   ngOnInit(): void {
//   this.crediturService.getData().subscribe({
//     next: (data) => {
//       this.parentData = data;
//       console.log(data)
//       this.cdRef.detectChanges()
//       this.wordingMessage = 'Berhasil ambil data dari service';
//     },
//     error: (error) => {
//       console.error('Gagal ambil data:', error);
//       this.wordingMessage = 'Gagal ambil data dari service';
//     }
//   });
// }


  // myFunction(){
  //   let name = "Apis"
  //   this.name2 = name
  // }
  

//   receivedForm(item: Creditur) {
//   this.crediturService.addDataToAPI(item).subscribe({
//     next: () => {
//       this.cdRef.detectChanges()
//     },
//     error: (err) => {
//       console.error('Gagal menambahkan data:', err);
//     }
//   });
// }

// handleDelete(id: string) {
//   this.crediturService.deleteDataFromAPI(id).subscribe({
//     next: () => {
//       console.log("berhasil hapus data")
//     },
//     error: (err) => {
//       console.error('Gagal menghapus data heh:', err);
//     }
//   });
// }


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
