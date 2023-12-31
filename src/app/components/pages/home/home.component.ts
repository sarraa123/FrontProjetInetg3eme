import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FavorisService } from 'src/app/services/favoris.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  itemsPerPage:number=4;
  totalRecettes:number = 0;

  foods:Food[]=[];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute,private favorisService: FavorisService) {
    let foodObservable:Observable<Food[]>;
    
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      foodObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
      foodObservable = this.foodService.getAll();

    foodObservable.subscribe((data:any)=>{
      console.log('Server Foods:', data);
      this.foods =data.recettes || data;
    
      this.totalRecettes = this.foods.length;

      console.log('Food IDs:', this.foods.map(food => food._id));
    })
    })
 
  }
  
  ngOnInit(): void {
    

  }
  addFavorite(food: Food) {
    this.favorisService.addToFavorite(food);
  }

  isFavorite(food: Food): boolean {
    return this.favorisService.getFavorites().some(fav => fav._id === food._id);
  }
  
}
