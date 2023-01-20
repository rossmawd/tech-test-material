import { FaultInterface } from "./fault-interface";

export interface FaultsStateInterface {
  isLoading: boolean;
  faults: FaultInterface[];
  error: string | null; // errors from the back end
}
