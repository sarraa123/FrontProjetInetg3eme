import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private userService :UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', Validators.required],
    });
  }

  /*submitForm() {
    const formData = this.loginForm.value;

    
    this.http.post('http://localhost:3000/api/user/login', formData,{responseType: 'text'})
      .subscribe((response: any) => {
        localStorage.setItem('token', response.token);

        alert("Connected !");
        this.router.navigate(['/']);
      }, (error) => {
        console.error('Login failed:', error);
      });
  } */

  submitForm() {
    const formData = this.loginForm.value;

    this.userService.login(formData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        console.log(formData);
        alert('Connected!');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  validate_email() {
    return this.loginForm.get('email')?.invalid && this.loginForm.controls['email'].touched;
  }

  validate_password() {
    return this.loginForm.get('motdepasse')?.invalid && this.loginForm.controls['motdepasse'].touched;
  }

  
}
