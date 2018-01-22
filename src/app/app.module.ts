import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { MoviesComponent } from './movies/movies.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
// import { ShoppingService } from './shopping.service';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MoviesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
