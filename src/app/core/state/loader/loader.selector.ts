import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { User } from "../auth/interfaces/user.interface";
import { Loader } from './loader.interface';



export const selectFeature = (state: AppState) => state.isLoading
 
export const selectLoader = createSelector(
  selectFeature,
  (state: Loader) => {return state.isLoading}
);