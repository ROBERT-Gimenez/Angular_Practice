import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './nav-links/nav-links.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  
  navLinks: Link[] = [
    { label: '', path: '/home', icon: 'bx bxl-linkedin-square' },
    { label: '', path: '/about', icon: 'bx bxl-whatsapp' },
    { label: '', path: '/contact', icon: 'bx bxl-facebook-circle' },
    { label: '', path: '/contact', icon: 'bx bx-envelope' }
  ];
  
  @Input() logoUrl: string ='https://i.ytimg.com/vi/bkqI_RKS8aU/hqdefault.jpg';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }
  
}
