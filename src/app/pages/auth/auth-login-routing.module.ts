import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'
import { AboutUsComponent } from './about-us/about-us.component';
import { CommentsComponent } from './comments/comments.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [

  {
    path: 'login',
    component:LoginComponent,
    children:[
      {path: 'aboutUs', component: AboutUsComponent},
      {path: 'comentarios', component: CommentsComponent},
      {path: 'preguntas', component:QuestionsComponent},
    ]
  },
  {
    path:'register',
    component:RegistroComponent,
    children:[
      {path: 'aboutUs', component: AboutUsComponent},
      {path: 'comentarios', component: CommentsComponent},
      {path: 'preguntas', component:QuestionsComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
