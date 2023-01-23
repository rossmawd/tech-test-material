import { createReducer, on } from "@ngrx/store";
import { FaultsStateInterface } from "../types/faultsState.interface";
import * as FaultActions from './actions'

export const initialState: FaultsStateInterface = {
  isLoading: false,
  faults: [],
  error: null,
}

export const reducers = createReducer(
  initialState,
  on(FaultActions.getFaults, (state) => ({ ...state, isLoading: true })),
  on(FaultActions.getFaultsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    faults: action.faults,
  })),
  on(FaultActions.getFaultsFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }),
  ),
  on(FaultActions.postFault, (state, action) => ({ ...state, faults: [...state.faults, { title: action.title, trayId: action.trayId }] }))
)
