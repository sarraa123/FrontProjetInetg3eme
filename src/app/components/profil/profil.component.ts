import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentUser!: user ;
  isEditMode: boolean = false;

  constructor(private userService: UserService) {
    this.currentUser = new user();
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userService.getUserById(this.currentUser).subscribe(
      (user: user) => {
        this.currentUser = user;
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  updateProfile() {
    if (this.currentUser) {
      // Utilisez votre méthode de service pour mettre à jour le profil du user
      this.userService.updateProfile(this.currentUser).subscribe(
        (updatedUser: user) => {
          this.currentUser = updatedUser;
          this.toggleEditMode();
        },
        (error) => {
          console.error('Error updating user profile:', error);
        }
      );
    }
  }
}
