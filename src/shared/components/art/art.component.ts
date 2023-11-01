import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Art } from 'src/models/model.model';
import { ArtServicesService } from 'src/shared/services/art-services.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
})
export class ArtComponent {
  @Input() arts!: Art;
  @Input() isAdded!: boolean;
  @Input() color: ThemePalette;
  @Output() eventClicked: EventEmitter<number> = new EventEmitter<number>();

  isLoading = true;
  img = '';
  
  constructor(private artService: ArtServicesService){ }

  getImage(id: string){
    this.isLoading = false;
    this.img = this.artService.getImage(id);
    return this.img;
  }

  addToFavourites(id: number){
    this.eventClicked.emit(id);
  }
}
