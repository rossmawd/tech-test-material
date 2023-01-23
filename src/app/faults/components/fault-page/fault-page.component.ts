import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FaultsActions from '../../store/actions'
import { Observable } from 'rxjs';
import { errorSelector, faultsSelector, isLoadingSelector } from '../../store/selectors';
import { FaultInterface } from '../../types/fault.interface';
import { FaultsService } from '../../faults.service';

@Component({
  selector: 'app-fault-page',
  templateUrl: './fault-page.component.html',
  styleUrls: ['./fault-page.component.css']
})
export class FaultPageComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  faults$: Observable<FaultInterface[]>;
  postFault$: Observable<any> | undefined;




  constructor(private store: Store<AppStateInterface>, private faultService: FaultsService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.faults$ = this.store.pipe(select(faultsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(FaultsActions.getFaults())

  }
}
