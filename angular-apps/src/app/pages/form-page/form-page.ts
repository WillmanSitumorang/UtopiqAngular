import { Component } from '@angular/core';
import { CrediturData } from '../../service/creditur/creditur-data';
import { Creditur } from '../../../model/creditur.interface';
import { Form } from '../../shared/form/form';

@Component({
  selector: 'app-form-page',
  imports: [Form],
  templateUrl: './form-page.html',
  styleUrl: './form-page.scss'
})
export class FormPage {

  constructor(
    private crediturService : CrediturData,
  ){}
  
  receivedForm(item: Creditur) {
    this.crediturService.addDataToAPI(item).subscribe({
      next: () => {
      },
      error: (err) => {
        console.error('Gagal menambahkan data:', err);
      }
    });
  }
}
