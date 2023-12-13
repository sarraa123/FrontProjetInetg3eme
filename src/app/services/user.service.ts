import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { user } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<user>;
  public currentUser: Observable<user>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): user {
    return this.currentUserSubject.value;
  }

  /*login(user: user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  } 
 */


  register(user: user): Observable<user> {
    return this.http.post<user>('http://localhost:3000/api/user/register', user);
  }

  login(user: user): Observable<user> {
    return this.http.post<user>('http://localhost:3000/api/user/login', user);
  } 
  /*
  login(user: user): Observable<user> {
    return this.http.post<user>('http://localhost:3000/api/user/login', user)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        })
      );
  } */

  updateProfile(user: user): Observable<user> {
    return this.http.put<user>(`http://localhost:3000/api/user/${user._id}`, user);
  }

  
  getAllUsers(): Observable<user[]> {
    return this.http.get<user[]>('http://localhost:3000/api/user');
  }

 getUserById(user: user): Observable<user> {
    return this.http.get<user>(`http://localhost:3000/api/user/${user._id}`);
  }

  private loggedInUserId: string | null = null;

  // Méthode pour définir l'ID de l'utilisateur connecté
  setLoggedInUserId(userId: string): void {
    this.loggedInUserId = userId;
  }

  // Méthode pour récupérer l'ID de l'utilisateur connecté
  getLoggedInUserId(): string | null {
    return this.loggedInUserId;
  }
}
