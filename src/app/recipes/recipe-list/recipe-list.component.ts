import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Recipe 1', 'Description of Recipe 1', 'https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg'),

    // tslint:disable-next-line:max-line-length
    new Recipe('Tasty Recipe', 'A tasty recipe', 'https://www.simplyrecipes.com/wp-content/uploads/2019/08/summer-chicken-panzanella-Lead3-768x512.jpg')
  ]

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe: Recipe){
    this.recipeWasSelected.emit(selectedRecipe);
  }

}
