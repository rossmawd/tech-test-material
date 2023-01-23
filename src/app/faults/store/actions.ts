import { createAction, props } from "@ngrx/store";
import { FaultInterface } from '../types/fault.interface';

export const getFaults = createAction('[Faults] Get Faults')
export const getFaultsSuccess = createAction('[Faults] Get Faults success', props<{ faults: FaultInterface[] }>())
export const getFaultsFailure = createAction('[Faults] Get Faults failure', props<{ error: string }>());


export const postFault = createAction('[Faults] Post Fault', props<FaultInterface>())

