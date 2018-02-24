import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from '../shared/Category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
})
export class BooksFilterComponent implements OnInit {
  categories: ICategory[];
  @Input('cat') cat;

  constructor( private categoryService: CategoryService) {
    this.categoryService.getAll()
      .subscribe(
      categories => {
        this.categories = categories;
        console.log('Child Componet received: ' + this.cat);
      }
      );
   }
  ngOnInit() {
  }
}
