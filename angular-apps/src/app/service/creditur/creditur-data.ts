import { Injectable } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';
import { Api } from '../api/api';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrediturData {


  constructor(private api: Api) {}

  getData(): Observable<Creditur[]> {
  return this.api.getData().pipe(
    map((res => (res as any[]).map(item => ({
      ...item,
      date: item.date ? new Date(item.date) : undefined,
      submittedAt: item.submittedAt ? new Date(item.submittedAt) : undefined
    })))),
    catchError((err) => {
      console.warn('Gagal ambil dari API', err);
      return throwError(() => err); // Penting: throw ulang error sebagai Observable
    })
  );
}



  /** Tambah data ke backend */
  addDataToAPI(item: Creditur): Observable<any> {
    const withTimestamp: Creditur = {
      ...item,
      submittedAt: new Date()
    };
    return this.api.postData(withTimestamp);
  }

  /** Hapus data dari backend */
  deleteDataFromAPI(id: string): Observable<any> {
    return this.api.deleteData(id);
  }

  getDataById(id: string): Observable<Creditur> {
  return this.api.getDataById(id).pipe(
    map((item: any) => ({
      ...item,
      date: item.date ? new Date(item.date) : undefined,
      submittedAt: item.submittedAt ? new Date(item.submittedAt) : undefined
    })),
    catchError((err) => {
      console.warn('Gagal ambil data by ID:', err);
      return throwError(() => err);
    })
  );
}
}
