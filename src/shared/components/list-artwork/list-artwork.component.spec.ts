import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtworkComponent } from './list-artwork.component';

describe('ListArtworkComponent', () => {
  let component: ListArtworkComponent;
  let fixture: ComponentFixture<ListArtworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListArtworkComponent]
    });
    fixture = TestBed.createComponent(ListArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
