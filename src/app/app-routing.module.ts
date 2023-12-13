import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { ProfilComponent } from './components/profil/profil.component';
import { DetailsRecetteUserComponent } from './components/details-recette-user/details-recette-user.component';
import { ListRecettesComponent } from './components/list-recettes/list-recettes.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { EditRecetteComponent } from './components/edit-recette/edit-recette.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddRecetteComponent } from './components/add-recette/add-recette.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'log-in', title:'log-in',component:LoginComponent},
  {path:'sign-up', title:'sign-up',component:SignupComponent},
  {path:'favoris', title:'favoris',component:FavorisComponent},
  {path:'profil', title:'profil',component:ProfilComponent},
  {path:'ListRecettes', title:'listRecettes',component:ListRecettesComponent},
  {path:'MenuUser', title:'menuUser',component:MenuUserComponent},
  {path:'AddRecette',title:'addRecette',component:AddRecetteComponent},

  {path:'EditRecette',title:'editRecette',component:EditRecetteComponent},
  {path:'EditUser', title:'editUser',component:EditUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
