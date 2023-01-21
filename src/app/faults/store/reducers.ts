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
  on(FaultActions.getFaultsFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })
  ),
)

// export const reducers = createReducer(
//   initialState,
//   on(FaultActions.getFaults, (state) => ({ ...state, isLoading: true }),

//   ))


  //on(PostActions.stopLoading, (state) => ({...state, isLoading: false}))

  // on(FaultActions.getFaultsSuccess, (state, action) => ({ ...state, isLoading: false, faults: action.faults }),
  // on(FaultActions.getFaultsFailure, (state) => ({ ...state, isLoading: true }),
