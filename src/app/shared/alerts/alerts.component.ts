import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from 'src/app/core/interfaces/alerts.interface';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Alert) {}

  ngOnInit(): void {
  }
  
}
