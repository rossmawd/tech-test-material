import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FarmVisualiserComponent } from './components/farm-visualiser/farm-visualiser.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TowerService } from './simulation/tower.service';
import { TowerNavigationComponent } from './components/tower-navigation/tower-navigation.component';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatToolbarModule,
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FarmVisualiserComponent,
        TowerNavigationComponent
      ],
      providers: [
        TowerService,
        { provide: MATERIAL_SANITY_CHECKS, useValue: false }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tech-test-material'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tech-test-material');
  });

});
