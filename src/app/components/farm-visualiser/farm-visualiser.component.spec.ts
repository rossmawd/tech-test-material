import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmVisualiserComponent } from './farm-visualiser.component';

describe('FarmVisualiserComponent', () => {
  let component: FarmVisualiserComponent;
  let fixture: ComponentFixture<FarmVisualiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmVisualiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmVisualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
