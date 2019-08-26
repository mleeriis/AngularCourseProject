import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipes.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() currentRecipe: Recipe;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.recipesService.recipeSelected.emit(this.currentRecipe);
  }
}
