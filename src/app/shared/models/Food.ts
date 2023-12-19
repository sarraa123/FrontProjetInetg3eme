import { comment } from "./comment";

export class Food {
    _id!: string;
    nom!: string;
    ingredients!: string[];
    instructions!: string;
    //favorite!: boolean;
    image!: File;
    recette?: any; 
    comments?: comment[];
  }
  
 