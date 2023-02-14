import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Button, Dialog } from './interfaces/dialog.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {dialog: Dialog}, private store: Store){}

  dispatchAction(button: Button){
    if(button?.action){
      this.store.dispatch(button?.action);
    }
  }

}
