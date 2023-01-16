import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerNavigationComponent } from './tower-navigation.component';

describe('TowerNavigationComponent', () => {
  let component: TowerNavigationComponent;
  let fixture: ComponentFixture<TowerNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowerNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
