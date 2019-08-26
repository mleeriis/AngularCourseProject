import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe;

  recipes: Recipe[];

  constructor(private RecipesService: RecipesService) {
  }

  ngOnInit() {
    this.recipes = this.RecipesService.getRecipes();
  }

  onRecipeSelected(){
   // this.RecipesService.recipeSelected.emit(this.selectedRecipe);
  }

}
