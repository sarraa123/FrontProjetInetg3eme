import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { FavorisService } from 'src/app/services/favoris.service';
import { FoodService } from 'src/app/services/food.service';
import { UserService } from 'src/app/services/user.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-list-recettes',
  templateUrl: './list-recettes.component.html',
  styleUrls: ['./list-recettes.component.css']
})
export class ListRecettesComponent implements OnInit{
  foods : Food[]= [];
  constructor(private foodservice:FoodService,private router:Router,private activatedRoute: ActivatedRoute,private favorisService:FavorisService,private authservice:UserService){
    let foodObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      foodObservable = this.foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      else{
        const userId = this.authservice.getLoggedInUserId(); // Obtenez l'ID de l'utilisateur connecté depuis le service d'authentification
        if (userId !== null) {
        this.foodservice.getAllByUserId(userId).subscribe((data: any) => {
      console.log('Server Foods:', data);
      this.foods = data.recettes || data;
  
      console.log('Food IDs:', this.foods.map(food => food._id));
    });
  }
  else {
    // Gérez le cas où userId est null
    console.error('User ID is null');
  }
   }
  })
  }
  
  ngOnInit(): void {

  }
     // Récupérer les recettes pour l'utilisateur spécifique
    
/*

  deleteRecette(foodId: number |undefined){
    if(confirm("Voulez-vous vraiment supprimer cet utilisateur ?")){
    if (foodId) {
    this.foodservice.DeleteRecette(foodId)
    .subscribe({
      next:(response) =>{
        
        const index = this.listing.findIndex(c => c.foodId === id);
        if (index !== -1) {
          this.listing.splice(index, 1);
        }
      }
    });
      }
    }
}*/

  
  addFavorite(food: Food) {
    this.favorisService.addToFavorite(food);
  }

  isFavorite(food: Food): boolean {
    return this.favorisService.getFavorites().some(fav => fav._id === food._id);
  }


}