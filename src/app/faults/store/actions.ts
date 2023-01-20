import { createAction, props } from "@ngrx/store";
import { FaultInterface } from '../types/fault-interface';

export const getFaults = createAction('[Faults] Get Faults')
export const getFaultsSuccess = createAction('[Faults] Get Faults success', props<{ faults: FaultInterface[] }>)
export const getFaultsFailure = createAction('[Faults] Get Faults failure', props<{ error: string }>)


// export const stopLoading = createAction('[Faults] Stop Loading')
