import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { FaultInterface } from './types/fault.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FaultsService {
  constructor(private http: HttpClient) { }

  getFaults(): Observable<FaultInterface[]> {
    const faults: Observable<any> = this.http.get(
      'http://localhost:3000/faults'
    );

    return faults.pipe(delay(2000));
  }

  postFault(fault: FaultInterface) {
    return this.http
      .post<FaultInterface>('http://localhost:3000/faults', fault, httpOptions)
      .pipe(catchError(() => 'error'));
  }
}
