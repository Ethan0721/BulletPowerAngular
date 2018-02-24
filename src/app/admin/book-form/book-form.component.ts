import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { BookService } from '../../service/book.service';
import { ICategory } from './../../shared/Category';
import { IBook } from './../../shared/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  categories: ICategory[];
  book : IBook = {
    id: 0,
    title: '',
    description: '',
    price: null,
    copies: null,
    edition: null,
    isbn: '',
    url: '',
    author: null,
    publishedDate: null,
    pages: null,
    publishingCompany: '',
    rating: null,
    categories: []
  };
  constructor(private categoryService: CategoryService, private bookService: BookService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe(
      categories => {
        this.categories = categories;
      }
    );
  }
}
