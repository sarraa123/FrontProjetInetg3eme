import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'log-in', title:'log-in',component:LoginComponent},
  {path:'sign-up', title:'sign-up',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
