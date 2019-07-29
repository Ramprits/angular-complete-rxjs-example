import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "signin", component: SigninComponent },
      { path: "signup", component: SignupComponent },
    ])
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthModule { }