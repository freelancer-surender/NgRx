import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from './store/cart.reducers';
import { SpinnerComponent } from './spinner/spinner.component';
import { FruitsEffects } from './store/fruits.effects';
import { VegetablesEffects } from './store/vegetables.effects';
import { fruitsReducer } from './store/fruits.reducers';
import { vegetablesReducer } from './store/vegetables.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FruitsComponent,
    VegetablesComponent,
    ItemComponent,
    AddItemComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cart: cartReducer, fruits: fruitsReducer, vegetables: vegetablesReducer}),
    EffectsModule.forRoot([FruitsEffects, VegetablesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
