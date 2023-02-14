import { Component, Input } from '@angular/core';

export  interface Link {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {
  
  @Input() links?: Link[];

}
