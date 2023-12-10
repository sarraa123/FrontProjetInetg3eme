export class Food {
    _id!: string;
    nom!: string;
    ingredients!: string[];
    instructions!: string;
    favorite!: boolean;
    image!: string;
    recette?: any; // Add this property to match the server response
  }
  