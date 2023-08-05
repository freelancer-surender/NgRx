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
import { cartReducer } from './store/cart.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FruitsComponent,
    VegetablesComponent,
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartCount: cartReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
