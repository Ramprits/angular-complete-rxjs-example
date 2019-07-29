import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: '', component: ProductsComponent },
    { path: 'users', component: UserComponent },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
    },
  ])],
  declarations: [AppComponent, NavbarComponent, ProductsComponent, NewProductComponent, UserComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
