import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

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
  
}
