import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FavorisComponent } from './components/favoris/favoris.component';
import { ProfilComponent } from './components/profil/profil.component';
import { DetailsRecetteUserComponent } from './components/details-recette-user/details-recette-user.component';

import{CommonModule } from  '@angular/common';
import { ListRecettesComponent } from './components/list-recettes/list-recettes.component';
import { AddRecetteComponent } from './components/add-recette/add-recette.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { EditRecetteComponent } from './components/edit-recette/edit-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    NotFoundComponent,
    FavorisComponent,
    ProfilComponent,
    DetailsRecetteUserComponent,
    ListRecettesComponent,
    AddRecetteComponent,
    MenuUserComponent,
    EditRecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
