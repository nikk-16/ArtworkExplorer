import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ArtServicesService } from 'src/shared/services/art-services.service';
import { Art } from 'src/models/model.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit{
  title = 'ArtworkExplorer';
  isActive = '';
  arts: Art[] = [];
  
  constructor(private artservice: ArtServicesService) {
    this.arts = this.artservice.allArts;  
    console.log(this.arts);
  }
  ngOnInit(){
    this.artservice.getData(0,12);
  }
  ngAfterViewInit(){
    console.log(this.arts);
  }
}


