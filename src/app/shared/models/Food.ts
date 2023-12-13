import { comment } from "./comment";

export class Food {
    _id!: string;
    nom!: string;
    ingredients!: string[];
    instructions!: string;
    favorite!: boolean;
    image!: string;
    recette?: any; 
    comments?: comment[];
  }
  
 