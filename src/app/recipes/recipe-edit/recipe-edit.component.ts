import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute.params.subscribe((params:Params) => {
      this.editMode = params['id'] != null;
      console.log(this.editMode);
    });
  }

}