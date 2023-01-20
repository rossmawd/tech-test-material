import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as FaultsActions from '../../store/actions'
import { Observable } from 'rxjs';
import { isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'app-fault-page',
  templateUrl: './fault-page.component.html',
  styleUrls: ['./fault-page.component.css']
})
export class FaultPageComponent implements OnInit {

  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(FaultsActions.getFaults())
  }
}
