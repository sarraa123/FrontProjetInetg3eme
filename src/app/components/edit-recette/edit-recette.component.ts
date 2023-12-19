import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-edit-recette',
  templateUrl: './edit-recette.component.html',
  styleUrls: ['./edit-recette.component.css']
})
export class EditRecetteComponent {
  addrecForm!: FormGroup;
  addrecetteRequest:Food={
    _id:'',
    nom:'',
    ingredients:[],
    instructions:'',
    //image: new File([], 'defaultFileName')  
    image:  new File([], 'defaultFileName')  ,
   // favorite: false, 
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

  UpdateRecette(){
    this.foodservice.UpdateRecette((this.addrecetteRequest._id), this.addrecetteRequest)
    .subscribe({
      next: (Response)=>{
        console.log(this.addrecetteRequest);
        //this.router.navigate(['/listrecettes']);
      }
    });
    
}

}