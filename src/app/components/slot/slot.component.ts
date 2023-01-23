import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Slot } from 'src/app/simulation/slot';
import * as FaultsActions from '../../faults/store/actions'

import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable, Subscription } from 'rxjs';
import { FaultInterface } from '../../faults/types/fault.interface';
import { faultsSelector } from 'src/app/faults/store/selectors';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
})
export class SlotComponent implements OnInit, OnDestroy {
  faults$: Observable<FaultInterface[]>;
  sub: Subscription | undefined;
  trayHasFault: boolean = false;
  constructor(private store: Store<AppStateInterface>) {
    this.faults$ = this.store.pipe(select(faultsSelector))
  }

  traysWithErrors: string[] = []

  @Input() slotData: Slot | null = null
  ngOnInit(): void {
    this.store.dispatch(FaultsActions.getFaults())

    this.sub = this.faults$.subscribe((val) => {
      val.forEach((val) => { this.traysWithErrors = [...this.traysWithErrors, val.trayId] })

      this.trayHasFault = this.traysWithErrors.includes(this.slotData?.growthTray?.identifier ?? '')

      console.log('New fault', this.traysWithErrors)
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }


  postNewFault(trayId: string | undefined) {
    this.store.dispatch(FaultsActions.postFault({ title: "Generic Fault", trayId: trayId ?? 'NO tray id' }))
  }

}
