import { Component, Input, OnInit } from '@angular/core';
import { TitleService } from '../title/service/title.service';
import { SideBarMenu } from './interface/menu.interface';
import { MenuBarService } from './services/menu-bar.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/core/state/auth/auth.actions';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menuOptions :SideBarMenu[]=[]
  menuTop! : SideBarMenu;
  menuBottom! : SideBarMenu;

  sidebarMobile:boolean = false

  constructor( private menuServices : MenuBarService,
               private authService : AuthService,
               private titleService : TitleService,
               private store: Store) { }

  ngOnInit(): void {
    this.menuOptions = this.menuServices.menuBar
    this.menuTop = this.menuServices.menuTop
    this.menuBottom = this.menuServices.menuBottom
  }

  logout(){
    this.authService.logout();
    this.store.dispatch(logout());
    localStorage.clear()
  }

  titleSend(title: string){
   
    this.titleService.setTitle({name: title})
  
  }

  open( sideBar :any){
    this.sidebarMobile = !this.sidebarMobile

    if(this.sidebarMobile){
      sideBar.style.display = 'flex'
    }else{
      sideBar.style.display = 'none'
    }

    
  }
}
