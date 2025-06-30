import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Table } from '../../shared/table/table';
import { CrediturData } from '../../service/creditur/creditur-data';
import { Creditur } from '../../../model/creditur.interface';

@Component({
  selector: 'app-tabel-creditur',
  imports: [Table],
  templateUrl: './tabel-creditur.html',
  styleUrl: './tabel-creditur.scss'

})
export class TabelCreditur implements OnInit{
  constructor(
    private crediturService:CrediturData,
    private cdRef : ChangeDetectorRef
  ){}

  parentData : Creditur[] = []

  wordingMessage : string = ''

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
  this.crediturService.getData().subscribe({
    next: (data) => {
      this.parentData = data;
      this.wordingMessage = 'Berhasil ambil data dari service';
      this.cdRef.detectChanges();
    },
    error: (err) => {
      console.error('Gagal ambil data:', err);
      this.wordingMessage = 'Gagal ambil data dari service';
    }
  });
}

  handleDelete(id: string) {
  this.crediturService.deleteDataFromAPI(id).subscribe({
    next: () => {
      console.log("berhasil hapus data")
      this.cdRef.detectChanges()
      this.getData();
    },
    error: (err) => {
      console.error('Gagal menghapus data heh:', err);
    }
  });
}
}
