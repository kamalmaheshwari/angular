import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg'),
    new Recipe('A Test Recipe', 'This is a simple test', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
