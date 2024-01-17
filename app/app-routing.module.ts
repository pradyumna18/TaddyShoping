import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';



const routes: Routes = [
//  {
//   path:'', redirectTo:'login', pathMatch:'full'
//  },
//  {
//   path:'login',component:LoginComponent
//  },
//  {
//   path:'signup',component:SignupComponent
//  },
//  {
//   path:'form',component:FormComponent
//  }


{
  path:'', redirectTo:'products', pathMatch:'full'
},
{
  path:'products',component:ProductsComponent
},
{
  path:'carts',component:CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
