import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArtComponent } from './display-art.component';

describe('DisplayArtComponent', () => {
  let component: DisplayArtComponent;
  let fixture: ComponentFixture<DisplayArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayArtComponent]
    });
    fixture = TestBed.createComponent(DisplayArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
