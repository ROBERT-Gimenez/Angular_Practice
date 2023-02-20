import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuBarService } from '../side-bar/services/menu-bar.service';
import { Title } from './interfaces/title.interface';
import { TitleService } from './service/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title: Observable<Title>;


  constructor(private titleService: TitleService) {
    this.title = this.titleService.getTitle();
  }

  ngOnInit(): void {


  }
}
