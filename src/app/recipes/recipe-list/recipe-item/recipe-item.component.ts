import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() currentRecipe = Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.selectedRecipe.emit(this.currentRecipe);
  }
}
