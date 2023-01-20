import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmVisualiserComponent } from './components/farm-visualiser/farm-visualiser.component';
import { FaultPageComponent } from './faults/components/fault-page/fault-page.component';

const routes: Routes = [{
  path: 'home',
  component: FarmVisualiserComponent
},
{
  path: 'faults',
  component: FaultPageComponent
},
{ path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
