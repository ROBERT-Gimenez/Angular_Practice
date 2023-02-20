import { createReducer, on } from '@ngrx/store';
import { Loader } from './loader.interface';
import { loader, loading } from './loader.actions';


export const initialState :Loader = {
    isLoading: false
}

export const loaderReducer =  createReducer(
    initialState,
    on(loader,(state) =>({
        ...state
    })),
    on(loading,(state,value)=>({
        ...state,
        isLoading : value.isloading
    }))
)