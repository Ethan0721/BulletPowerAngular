import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../shared/Book';
import { BookService } from '../service/book.service';
import { ICategory } from '../shared/Category';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // categories: ICategory[];
  //   constructor(private _bookService : BookService) {
  //   this._bookService.getBooksByCategory("3").subscribe(categories =>{data=>
  //       console.log(data);
  //     }
  //   );
 // }
  ngOnInit() {
  }
}
