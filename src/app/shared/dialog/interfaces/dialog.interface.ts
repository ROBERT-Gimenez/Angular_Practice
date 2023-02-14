import { Action } from "@ngrx/store"

export interface Button {
    label: string,
    action?: Action
};

export interface Dialog {
    title?: string,
    content?: string,
    buttons?: Button[]
}