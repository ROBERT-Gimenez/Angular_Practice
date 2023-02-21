import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoadingComponent } from './loading/loading.component';
import { TitleComponent } from './title/title.component';
import { NavLinksComponent } from './footer/nav-links/nav-links.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DivisasComponent } from '../components/divisas/divisas.component';
import { TipoCambioComponent } from '../components/tipo-cambio/tipo-cambio.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    SideBarComponent,
    LoadingComponent,
    TitleComponent,
    FooterComponent,
    NavLinksComponent,
    AlertsComponent,
    DialogComponent,
    FormComponent,
    DivisasComponent,
    TipoCambioComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    SharedRoutingModule,
    SideBarComponent,
    LoadingComponent,
    TitleComponent,
    FooterComponent,
    AlertsComponent,
    DialogComponent,
    FormComponent,
    TipoCambioComponent
  ]
})
export class SharedModule { }
