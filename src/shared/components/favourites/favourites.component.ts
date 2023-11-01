import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { Art, oneArt } from 'src/models/model.model';
import { ArtServicesService } from 'src/shared/services/art-services.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit{
  arts: Art[] = [];
  toShow: Art[] = [];
  pageIndex = 0;
  pageSize = 5;
  favouriteIds: number[];
  isLoading = true;
  isEmpty: boolean;
  color: ThemePalette = 'warn';
  constructor(private artService: ArtServicesService){
    this.favouriteIds = this.artService.favouriteIds;
    if(this.favouriteIds.length === 0){
      this.isEmpty = false;
    }
    else{
      this.isEmpty = true;
    }
  }
  ngOnInit(){
    for(let i = 0; i < this.favouriteIds.length; i++){
      this.artService.getAnArt(this.favouriteIds[i]).subscribe(
        (data: oneArt) => {
          this.arts.push(data.data as Art);
          this.isLoading = false;
        },
        (er) => {
          console.error(er);
        }
      );
      this.toShowArts();
    }
    console.log(this.arts)
  }
  onChangeEvent(e: PageEvent){
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.toShowArts();
  }
  removeFromFavourites(id: number){
    this.artService.addToFavourites(id);
    this.favouriteIds = this.artService.getFavourites();
    if(this.favouriteIds.length === 0){
      this.isEmpty = false;
    }
    else{
      this.isEmpty = true;
    }
    this.arts = this.arts.filter((art) => art.id !== id);
  }
  toShowArts(){
    this.toShow = this.arts.slice(this.pageIndex*this.pageSize,(this.pageIndex+1)*this.pageSize);
  }
}
