import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  goHome() {
    if(localStorage.getItem('token')){
      location.replace('dashboard/home');
    }else{
      location.replace('login');
    }
}
  constructor() { }

  ngOnInit(): void {
  }

}
