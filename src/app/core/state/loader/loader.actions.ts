import { createAction, props } from '@ngrx/store';

export const loader = createAction('[Loader] Loader');

export const loading = createAction('[Loader] Loading', props<{isloading:boolean}>())