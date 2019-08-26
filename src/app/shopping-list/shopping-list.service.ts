import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Output} from '@angular/core';

export class ShoppingListService{
  @Output() ingredientsUpdated = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 15),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

  addMultipleIngredients(ingredientList: Ingredient[]){
    this.ingredients.push(...ingredientList);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

}
