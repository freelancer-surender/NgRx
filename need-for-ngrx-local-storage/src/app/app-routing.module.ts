import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  { path: '', redirectTo: 'fruits', pathMatch: 'full' },
  { path: 'fruits', component: FruitsComponent },
  { path: 'vegetables', component: VegetablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
