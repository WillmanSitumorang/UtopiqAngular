import { Injectable } from '@angular/core';
import { Creditur } from '../../model/creditur.interface';

@Injectable({
  providedIn: 'root'
})
export class CrediturData {

   private data: Creditur[] = [
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
      date: new Date('2025-06-27')
    },
    {
      name : "Willman",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
      date: new Date('2025-06-26')
    },
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
      date: new Date('2025-06-30')
    },
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
      date: new Date('2025-07-27')
    },
    {
      name : "Dr. Levi Russel",
      age : 96,
      price : 1,
      job : "Direct Data Producer",
      dp : 62,
      date: new Date('2026-12-11')
    }
  ];

  constructor() { }

  getData(): Creditur[] {
    return [...this.data]; // return salinan agar tidak bisa dimodifikasi langsung dari luar
  }

    // Menambahkan data baru
  setData(newItem: Creditur): void {
  const itemWithTimestamp: Creditur = {
    ...newItem,
    submittedAt: new Date()
  };
  this.data.push(itemWithTimestamp);
}

  // Menghapus data berdasarkan index
  deleteData(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }
}
