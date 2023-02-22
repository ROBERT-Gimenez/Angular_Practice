import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsAndConditionsComponent } from 'src/app/components/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommentsComponent } from './comments/comments.component';
import { QuestionsComponent } from './questions/questions.component';
import { RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    TermsAndConditionsComponent,
    AboutUsComponent,
    CommentsComponent,
    QuestionsComponent,
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AuthModule { }
