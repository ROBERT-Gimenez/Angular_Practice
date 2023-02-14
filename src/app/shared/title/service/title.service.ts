import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Title } from '../interfaces/title.interface';



@Injectable({
  providedIn: 'root'
})

export class TitleService {

  titleLocal : string = localStorage.getItem('title') || ''

  private title: Title = { name: this.titleLocal };

  private titleSubject = new BehaviorSubject<Title>(this.title);

  constructor() { }

  setTitle(title: Title) {
    localStorage.setItem('title', title.name)
    this.title = title;
    this.titleSubject.next(this.title);
  }

  getTitle(): Observable<Title> {
    return this.titleSubject.asObservable();
  }
}
