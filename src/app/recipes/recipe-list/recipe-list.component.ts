import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Description of Recipe 1', 'imagePath'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Tasty Recipe', 'A tasty recipe', 'https://www.simplyrecipes.com/wp-content/uploads/2019/08/summer-chicken-panzanella-Lead3-768x512.jpg')
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
