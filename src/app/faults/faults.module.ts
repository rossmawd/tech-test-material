import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FaultPageComponent } from './components/fault-page/fault-page.component';
import { FaultsService } from './faults.service';
import { reducers } from './store/reducers';



@NgModule({
  declarations: [
    FaultPageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('faults', reducers)
  ],
  providers: [FaultsService],
  exports: [FaultPageComponent]
})
export class FaultsModule { }
