import { Component, OnInit } from '@angular/core';
import { FavorisService } from 'src/app/services/favoris.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  favoriteRecipes: Food[] = [];

  constructor(private favorisService: FavorisService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteRecipes = this.favorisService.getFavorites();
  }
  removeFavorite(food: Food): void {
    this.favorisService.removeFavorite(food);
  
  }

}
