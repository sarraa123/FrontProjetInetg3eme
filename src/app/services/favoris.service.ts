import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private favorites: Food[] = [];

  constructor() {
   
  }

  getFavorites(): Food[] {
    return this.favorites;
  }

  addToFavorite(food: Food): void {
    const index = this.favorites.findIndex(fav => fav._id === food._id);

    if (index !== -1) {
      
      this.favorites.splice(index, 1);
    } else {
      
      this.favorites.push(food);
    }
  }

  removeFavorite(food: Food): void {
    this.favorites = this.favorites.filter(fav => fav._id !== food._id);
  }




}
