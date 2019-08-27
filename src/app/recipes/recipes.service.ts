import {Recipe} from './recipes.model';
import {EventEmitter, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipesService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Recipe 1',
      'Description of Recipe 1',
      'https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg',
      [
        new Ingredient('Meatballs', 6),
        new Ingredient('Tomatoes', 4)
      ]),

    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Tasty Recipe',
      'A tasty recipe',
      'https://www.simplyrecipes.com/wp-content/uploads/2019/08/summer-chicken-panzanella-Lead3-768x512.jpg',
      [
        new Ingredient('Lettuce', 10),
        new Ingredient('Cheese', 5)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

}
