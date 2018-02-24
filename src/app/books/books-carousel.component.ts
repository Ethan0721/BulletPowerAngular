import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { BookService } from '../service/book.service';
import { IBook } from '../shared/Book';

@Component({
  selector: 'app-books-carousel',
  templateUrl: './books-carousel.component.html',
  styleUrls: ['./books-carousel.component.css']
})
export class NgbdCarouselConfig {
    books: IBook[];
    // book1: IBook;
    constructor(config: NgbCarouselConfig, private bookService: BookService ) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    
    this.bookService.getAll()
    .subscribe(
    book => {
        this.books = book;
        
    }    
    );
    // this.book1 = this.books[0];
}
}