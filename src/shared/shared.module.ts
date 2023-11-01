import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ListArtworkComponent } from './components/list-artwork/list-artwork.component';
import { ArtComponent } from './components/art/art.component';
import { MaterialModule } from 'src/material/material.module';
import { DisplayArtComponent } from './components/display-art/display-art.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListArtworkComponent,
    ArtComponent,
    DisplayArtComponent,
    FavouritesComponent,
    DocumentationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    HomeComponent,
    ListArtworkComponent
  ]
})
export class SharedModule { }
