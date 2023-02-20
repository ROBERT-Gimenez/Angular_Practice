import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loader, loading } from '../../core/state/loader/loader.actions';
import { selectLoader } from '../../core/state/loader/loader.selector';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

loading$: Observable<boolean> = new Observable()


  constructor( private store: Store<any>) {
    this.loading$ = this.store.select(selectLoader)

    // this.store.dispatch(loading({isloading:false}))
  }
  
  ngOnInit(): void {
   
  }

}
