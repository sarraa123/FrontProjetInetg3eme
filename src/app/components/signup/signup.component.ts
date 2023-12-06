import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {

  myForm!:FormGroup;
  nom:string="";
  email:string="";
  motdepasse:string="";

  constructor(private http: HttpClient,private formBuilder: FormBuilder, private router: Router) {
    
    this.myForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*+-])(?=.{8,})/)]],

    });

   
  }
  ngOnInit(): void {
    
  }


  submitForm() {

    const formData = this.myForm.value;
    // Send a POST request to your Node.js API
    this.http.post('http://localhost:3000/api/user/register', formData,{responseType: 'text'})
      .subscribe(
        (resultData : any) => {
          console.log(resultData);
          alert("inscription terminée");
          
        },
        (error) => {
          console.error(error);
          // Handle registration error
        }
      );

  }

  /*
  submitForm() {
    let bodyData ={
      "nom":this.nom,
      "email":this.email,
      "motdepasse":this.motdepasse
    
    }

   // const formData = this.myForm.value;
    // Send a POST request to your Node.js API
    this.http.post('http://localhost:3000/api/user/register', bodyData,{responseType: 'text'})
      .subscribe(
        (resultData : any) => {
          console.log(resultData);
          alert("inscription terminée");

          this.nom='';
          this.email='';
          this.motdepasse='';
          
        },
        (error) => {
          console.error(error);
          // Handle registration error
        }
      );

  }
  */

}
