import { Component, OnInit } from '@angular/core';

interface ToolBarButton {
  title : string;
  url : string
}


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  
  buttons : ToolBarButton[] = [
    {title:"Sobre nosotros", url:'aboutUs' },
    {title:"Preguntas", url:'preguntas'},
    {title:"Comentarios", url:'comentarios' },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
