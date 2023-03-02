import { Injectable } from '@angular/core';
import { SideBarMenu } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {


//   Home

// Ingresos
// Egresos
// Enviar Dinero
// Plazos Fijos
// Contactos
// Perfil
// Billeteras


  private menu :SideBarMenu[] =
  [
    {title:"Home", icon:"home", route:"home"},
    {title:"Ingresos", icon:"attach_money", route:"ingresos"},
    {title:"Egresos", icon:"trending_down", route:"egresos"},
    {title:"Plazos Fijos", icon:"insert_chart", route:"plazos-fijos"},
    {title:"Contactos", icon:"contact_page", route:"contact"},
    {title:"Billeteras", icon:"account_balance_wallet", route:"wallet"}
   
  ]

  private topIcon:SideBarMenu={
    title:"Perfil", icon:"account_circle", route:"perfil"
  }

  private bottomIcon : SideBarMenu={
    title:"Cerrar sesion", icon:"logout", route:"**"
    }
  

  get menuBar():SideBarMenu[]{
    return this.menu
  }

  get menuTop(){
    return this.topIcon
  }
  get menuBottom(){
    return this.bottomIcon
  }

  constructor() { }
}
