import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultPageComponent } from './fault-page.component';

describe('FaultPageComponent', () => {
  let component: FaultPageComponent;
  let fixture: ComponentFixture<FaultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
