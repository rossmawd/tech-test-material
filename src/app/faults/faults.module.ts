import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FaultPageComponent } from './components/fault-page/fault-page.component';
import { FaultsService } from './faults.service';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { FaultsEffects } from './store/effects';



@NgModule({
  declarations: [
    FaultPageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('faults', reducers),
    EffectsModule.forFeature([FaultsEffects])
  ],
  providers: [FaultsService],
  exports: [FaultPageComponent]
})
export class FaultsModule { }
