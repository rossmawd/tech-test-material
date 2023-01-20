import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { FaultsInterface } from './types/faults-interface';


@Injectable({
  providedIn: 'root'
})
export class FaultsService {
  getFaults(): Observable<FaultsInterface[]> {
    const faults = [
      { id: '1', title: 'First Fault' },
      { id: '2', title: 'Second Fault' },
      { id: '3', title: 'Third Fault' },
    ]

    return of(faults).pipe(delay(2000))

  }
  // constructor() { }
}
