import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Recipe} from '../recipes.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private slService: ShoppingListService, private recipesService: RecipesService, private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }

  addToShoppingList(ingredientList: Ingredient[]) {
    this.slService.addMultipleIngredients(ingredientList);
  }

}
