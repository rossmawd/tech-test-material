import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/types/appState.interface";

export const selectFeature = (state: AppStateInterface) => state.faults

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
)


export const faultsSelector = createSelector(
  selectFeature,
  (state) => state.faults
)

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
)
