import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList(ingredientList: Ingredient[]){
    this.slService.addMultipleIngredients(ingredientList);
  }

}
