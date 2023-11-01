import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Art, Data, oneArt } from 'src/models/model.model';

@Injectable({
  providedIn: 'root'
})
export class ArtServicesService {
  favourites: Array<Art> = [];
  favouriteIds: number[] = [];
  allArts: Art[] = [];
  fields = `id,title,artist_title,artwork_type_title,category_title,copyright_notice,credit_line,date_start,exhibition_history,image_id,description,dimensions,`
  favourite: number[] = [];
  constructor(private http: HttpClient) {

    this.getData(0, 12).subscribe(
      (data: Data) => { 
        this.allArts = data.data as Art[] 
      }, (er) => {
        console.error(er);
      });
    if (window.localStorage.getItem("favourite") === null) {
      window.localStorage.setItem("favourite", JSON.stringify(this.favourite));
      console.error(JSON.parse(window.localStorage.getItem("favourite") as string))
    } else {
      this.favourite = JSON.parse(window.localStorage.getItem("favourite") as string);
    }
  }

  getData(page: number, limit: number): Observable<Data> {
    return this.http.get<Data>(`https://api.artic.edu/api/v1/artworks?fields=${this.fields}?&limit=${limit}&page=${page + 1}`)
  }
  getImage(id: string): string {
    return `https://www.artic.edu/iiif/2/` + id + `/full/843,/0/default.jpg`

  }
  getAnArt(id: number): Observable<oneArt> {
    console.log(this.http.get<oneArt>(`https://api.artic.edu/api/v1/artworks/${id}?fields=${this.fields}`).subscribe((data: oneArt) => {
      console.log(typeof data.data)
    }))

    return this.http.get<oneArt>(`https://api.artic.edu/api/v1/artworks/${id}?fields=${this.fields}`)
  }
  addToFavourites(id: number) {
    
    if (!(this.favourite.find((wId: number) => wId === id))) {
      this.favourite.push(id);
      this.favouriteIds.push(id);
    } else {
      this.favourite = this.favourite.filter((ids) => ids !== id);
      this.favouriteIds = this.favouriteIds.filter((ids) => ids !== id);
    }
    window.localStorage.setItem("favourite", JSON.stringify(this.favourite));
    console.warn(this.favouriteIds);
  }
  getFavourites(): number[] {
    return this.favouriteIds;
  }
  getFilteredData(page: number, limit: number, query: string): Observable<Data> {
    const dat: Observable<Data> = this.http.get<Data>
      (`https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=${this.fields}&limit=${limit}&page=${page + 1}`);
    return dat
  }

  shareOnFacebook(shareUrl: string) {
    shareUrl = encodeURIComponent(shareUrl);
    console.log(shareUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, 'sharer');
  }
 
  shareOnTwitter(shareUrl: string, desc: string) {
    shareUrl = encodeURIComponent(shareUrl);
    desc = encodeURIComponent(desc);
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${desc}`, 'sharer');
  }
 
  shareOnGooglePlus(shareUrl: string) {
    shareUrl = encodeURIComponent(shareUrl);
    window.open(`https://plus.google.com/share?url=${shareUrl}`, 'sharer');
  }
 
  shareOnPinterest(shareUrl: string, img: string, desc: string) {
    shareUrl = encodeURIComponent(shareUrl);
    img = encodeURIComponent(img);
    desc = encodeURIComponent(desc);
    window.open(`https://www.pinterest.com/pin/create/button?url=${shareUrl}&media=${img}&description=${desc}`, 'sharer');
  }
}
