import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  foods:Food[]=[];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    let foodObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      foodObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
      foodObservable = this.foodService.getAll();

    foodObservable.subscribe((data:any)=>{
      console.log('Server Foods:', data);
      this.foods =data.recettes;

      console.log('Food IDs:', this.foods.map(food => food.id));
    })
    })
 
  }
  
  ngOnInit(): void {
    

  }
}
