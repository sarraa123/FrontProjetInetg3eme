import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavorisService } from 'src/app/services/favoris.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { comment as FoodComment } from 'src/app/shared/models/comment';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  newComment: string = '';

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService,private favorisService: FavorisService) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Params:', params);
      const foodId = params['id'];
      console.log('Food ID:', foodId);
      if (foodId) {
        this.foodService.getFoodById(foodId).subscribe(
          (serverFood) => {
            this.food = serverFood.recette || serverFood;
            console.log('Food details:', this.food);
          },
          (error) => {
            console.error('Error fetching food details:', error);
          }
        );
      }
    });
  }

  addComment() {
    if (!this.food) {
      console.error('Food is undefined');
      return;
    }

    const newComment: FoodComment = { 
      user: this.foodService.currentUserValue?.username || 'Unknown User',
      text: this.newComment,
      date: new Date(),
    };

    
    this.food.comments = this.food.comments || [];
    this.food.comments.push(newComment);

    
    this.foodService.updateFood(this.food).subscribe(
      () => {
        console.log('Comment added successfully');
      },
      (error) => {
        console.error('Error updating food with new comment:', error);
      }
    );

   
    this.newComment = '';
  }

addFavorite() {
  this.favorisService.addToFavorite(this.food);
}

isFavorite(): boolean {
  return this.favorisService.getFavorites().some(fav => fav._id === this.food._id);
}
}