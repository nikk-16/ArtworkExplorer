import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { Art, Data } from 'src/models/model.model';
import { ArtServicesService } from 'src/shared/services/art-services.service';

@Component({
  selector: 'app-list-artwork',
  templateUrl: './list-artwork.component.html',
  styleUrls: ['./list-artwork.component.css']
})
export class ListArtworkComponent implements OnInit, AfterViewInit{
  arts!: Art[];
  pageIndex = 0;
  pageSize = 12;
  isAdded: boolean[] = [];
  color: ThemePalette;
  isLoading = true;
  total!: number;
  searchValue: FormGroup = new FormGroup({
    query: new FormControl('')
  });
  allArts: Art[] = [];
  constructor(private artService: ArtServicesService) {
    this.searchValue.valueChanges.subscribe((e) => {
      if (e.query === '') { this.arts = this.allArts }
      else {
        artService.getFilteredData(this.pageIndex, this.pageSize, e.query).subscribe((data: Data) => {
          this.arts = [];
          this.arts = data.data as Art[];
          this.total = data.pagination.total_pages;
        });
      }
    });

  }
  ngOnInit() {
    const elemt = document.getElementById('routing');
    elemt?.setAttribute('style', 'text-decoration: underline; shadow: 100px');
    this.artService.getData(this.pageIndex, this.pageSize).subscribe(
      (data: Data) => { 
      this.arts = data.data as Art[]; 
      this.allArts = this.arts; 
      this.isLoading = false; 
      this.total = data.pagination.total_pages; 
    }, 
    (er) => {
      console.error(er);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      for (let i = 0; i < this.arts.length; i++) {
        if (this.artService.favouriteIds.filter(ids => ids === this.arts[i].id).length > 0) {
          this.isAdded[this.arts[i].id] = true;
        }
        else {
          this.isAdded[this.arts[i].id] = false;
        }
      }
    }, 500);
  }

  addToFavourites(id: number) {
    this.artService.addToFavourites(id);
    for (let i = 0; i < this.arts.length; i++) {
      if (this.artService.favouriteIds.filter(ids => ids === this.arts[i].id).length > 0) {
        this.isAdded[this.arts[i].id] = true;
      }
      else {
        this.isAdded[this.arts[i].id] = false;
      }
    }

  }
  onPageChange(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;

    this.artService.getData(this.pageIndex, this.pageSize).subscribe(
      (data: Data) => { 
        this.arts = data.data as Art[]; 
        this.total = data.pagination.total_pages; 
      },
      (er) => {
        console.log(er);
      });
  }
}
