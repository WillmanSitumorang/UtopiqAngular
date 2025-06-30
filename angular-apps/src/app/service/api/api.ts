import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {

  api : string= 'https://685cee58769de2bf085e7ba4.mockapi.io/dummy-fif/Creditur'

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.api)
  }

  postData(data: any): Observable<any> {
  return this.http.post(this.api, data); // penting!
}

  deleteData(id: string): Observable<any> {
    const url = `${this.api}/${id}`;
    return this.http.delete(url);
  }

  getDataById(id: string): Observable<any> {
  const url = `${this.api}/${id}`;
  return this.http.get(url);
}

}
