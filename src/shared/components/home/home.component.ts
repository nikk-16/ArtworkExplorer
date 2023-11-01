import { Component, OnInit } from '@angular/core';
import { Art, Data } from 'src/models/model.model';
import { ArtServicesService } from 'src/shared/services/art-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  arts!: Art[];
  isLoading = true;
  constructor(private artService: ArtServicesService) {
  }

  ngOnInit() {
    this.artService.getData(0, 5).subscribe(
      (data: Data)=>{
      this.arts = data.data as Art[];
      this.isLoading = false;
    },
    (er) => {
      console.error(er);
    });
      
  }

}
