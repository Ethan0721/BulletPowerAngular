import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/Book';
import { BookService } from '../service/book.service';
import { ICategory } from '../shared/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: IBook[] = [];
  filteredBooks: IBook[] = [];
  categoryId: string;
  ngOnInit() {

  }
  constructor(private route: ActivatedRoute,private bookService: BookService) { 
    this.bookService.getAll()
    .subscribe(
    books => {
      this.books = books;

      // route.queryParamMap.subscribe(
      //   params => {
      //   this.categoryId = params.get('categoryId');
        
      //   if (this.categoryId != null) {
      //     this.bookService.getBooksByCategory(this.categoryId)
      //       .subscribe(
      //       filteredbooks => {
      //         //  console.log(this.categoryId);
      //         this.books = (this.categoryId != null) ? filteredbooks : this.books;
      //         console.log('Home componet Category: ' + this.categoryId);
      //       }
      //       );
      //   }


      // });
     }
    );
  }
}
