import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.css']
})
export class AddRecetteComponent implements OnInit{
  addrecForm!: FormGroup;
  addrecetteRequest:Food={
    _id:'',
    nom:'',
    ingredients:[],
    instructions:'',
    //image: new File([], 'defaultFileName')  
    image:  new File([], 'defaultFileName')  ,
    
  };
  constructor(private formBuilder:FormBuilder,private foodservice:FoodService,private router:Router){}
  ngOnInit(): void {
    this.addrecForm=this.formBuilder.group(
      {
        nom:['',Validators.required],
        ingredients:['',Validators.required],
        instructions:['',Validators.required],
        image:[''],
        
       } );
  }

  
  selectImage(event:any) {
    if(event.target.files.length>0){
    const file = event.target.files[0];
    this.addrecForm.get('image')!.setValue(file);
  }


  }
  addrecette() {
    const formData=new FormData();
   // formData.append('image', this.addrecForm.get('image')!.value);

    formData.append('image', this.addrecForm.get('image')!.value);

    console.log(this.addrecetteRequest);

       this.foodservice.AddRecette(this.addrecetteRequest)
       .subscribe({
        next:(response)=>{
          alert('Recette a été ajouté avec succés!');
          //this.router.navigate(['listrecettes']);
        },
        error: (error) => {
          console.error('Error adding recette:', error);
        }
       });
    
    
  }
}