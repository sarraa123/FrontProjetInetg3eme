import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  currentUserValue: any;

  constructor(private http: HttpClient) { }
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:3000/api/recette');
  }

  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(`http://localhost:3000/api/recette/search/${searchTerm}`);
  }
  
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(`http://localhost:3000/api/recette/${foodId}`);
  }
  addComment(foodId: string, commentText: string): Observable<Food> {
    //POST 
    return this.http.post<Food>(`http://localhost:3000/api/recette/${foodId}/comments`, { text: commentText });
  }

  updateFood(food: Food): Observable<Food> {
    //PUT
    return this.http.put<Food>(`http://localhost:3000/api/recette/${food._id}`, food);
  }
}
