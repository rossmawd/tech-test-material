import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Slot } from 'src/app/simulation/slot';
import * as FaultsActions from '../../faults/store/actions'

import { AppStateInterface } from 'src/app/types/appState.interface';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
})
export class SlotComponent implements OnInit {
  constructor(private store: Store<AppStateInterface>) { }

  @Input() slotData: Slot | null = null
  ngOnInit(): void {
  }


  postNewFault(trayId: string | undefined) {
    this.store.dispatch(FaultsActions.postFault({ title: "Generic Fault", trayId: trayId ?? 'NO tray id' }))

  }

}
