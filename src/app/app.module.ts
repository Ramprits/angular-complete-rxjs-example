import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: '', component: ProductsComponent }
  ])],
  declarations: [AppComponent, NavbarComponent, ProductsComponent, NewProductComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
