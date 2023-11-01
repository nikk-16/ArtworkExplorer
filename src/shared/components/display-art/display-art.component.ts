import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Art, oneArt } from 'src/models/model.model';
import { ArtServicesService } from 'src/shared/services/art-services.service';

@Component({
  selector: 'app-display-art',
  templateUrl: './display-art.component.html',
  styleUrls: ['./display-art.component.css']
})
export class DisplayArtComponent {
  art!: Art;
  id: string|null;
  url!: string;
  constructor(private artService: ArtServicesService, private activeRoute: ActivatedRoute, private router: Router){
    this.activeRoute.url.subscribe(value=> this.url = value.toString());
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.artService.getAnArt(this.id as unknown as number).subscribe(
      (data: oneArt) => {
        this.art = data.data as Art;
        
      },
      (er) => {
        console.warn(this.art);
        console.error(er);
      }
    );
  }
  getImage(id: string): string {
    return this.artService.getImage(id);
  }
  shareOnFacebook() {
    this.artService.shareOnFacebook(this.url)
  }
 
  shareOnTwitter() {
    this.artService.shareOnTwitter(this.url, this.art.description)
  }
 
  shareOnGoogle() {
    this.artService.shareOnGooglePlus(this.url)
  }
 
  shareOnPinterest() {
    this.artService.shareOnPinterest(this.url, this.getImage(this.art.id as unknown as string), this.art.description);
  }
}
