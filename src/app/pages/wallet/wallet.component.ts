import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import { environment } from 'src/environments/environment';
import { HttpService } from '../../core/services/http.service';


const baseUrl = environment.URL_BASE
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  canSee : boolean = false;
  
  canViewForm:boolean = false

  OperationLocal : string = localStorage.getItem('Operation') || ''

  numberOperations :string | number = this.OperationLocal || ''

  info! : string
  
  money:number = NaN

  isInsufficient : boolean = false

 
  @ViewChild('mapa',{static:false}) divMapa!: ElementRef;
  map! : mapboxgl.Map


  center : [number,number] =  [-58.57223753934804, -34.7492652087566]

  constructor( private http : HttpService,
               private changeDetector: ChangeDetectorRef) { }
  

  ngOnInit(): void {
      this.http.get(`${baseUrl}/accounts/me`).subscribe(
        {next: (resp:any) => this.money = resp[0].money})

      if(this.numberOperations){
        this.createMap()
      }
  }


  changeView(){
    this.canSee = !this.canSee
  }

  addEvent(date:any){

    if(!date.value){
      return
    }

    this.operationTrue()

  }

  extract(date:any){

    
    if(date.value>this.money){
      this.isInsufficient = true
      return
    }

    if(!date.value){
      return
    }

  this.operationTrue()

    
  }
  
  openForm(text :string){
    this.canViewForm = true
    this.info = text
  }
  
  closedForm(){
    this.canViewForm = false
  }
  
  operationTrue(){
    this.numberOperations = Math.round(Math.random() * 100000);

    localStorage.setItem('Operation', JSON.stringify(this.numberOperations))
    
    this.createMap()

    this.closedForm()
  }

  createMap(){


    this.changeDetector.detectChanges();

    (mapboxgl as any).accessToken = environment.mapboxToken
   
    this.map = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/dark-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: 15, // starting zoom
      });
  
      const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.map)



  }

}
