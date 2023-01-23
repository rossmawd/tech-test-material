import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowerService } from './simulation/tower.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDividerModule } from '@angular/material/divider';


import { TowerComponent } from './components/tower/tower.component';
import { FarmVisualiserComponent } from './components/farm-visualiser/farm-visualiser.component';
import { TowerNavigationComponent } from './components/tower-navigation/tower-navigation.component';
import { SlotComponent } from './components/slot/slot.component';
import { FaultsModule } from './faults/faults.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects'
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TowerComponent,
    FarmVisualiserComponent,
    TowerNavigationComponent,
    SlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    FaultsModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({}),
    //https://ngrx.io/guide/store-devtools
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      //environment.production
      logOnly: environment.production,
      autoPause: true,
    })

  ],
  providers: [
    TowerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
