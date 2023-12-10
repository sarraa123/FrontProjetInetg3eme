import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
constructor(activatedRoute:ActivatedRoute, foodService:FoodService){
  activatedRoute.params.subscribe((params) => {
    console.log('Params:', params);
    const foodId = params['id'];
    console.log('Food ID:', foodId);
    if(foodId)
    foodService.getFoodById(foodId).subscribe(serverFood =>{
       this.food=serverFood.recette || serverFood;
       console.log('Food details:', this.food);
      },
      error => {
        console.error('Error fetching food details:', error);
    });
  })
}

ngOnInit(): void {

}
}
