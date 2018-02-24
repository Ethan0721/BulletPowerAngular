import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { IBook } from '../shared/Book';
import { AbstractRestService } from './abstract.rest.service';

@Injectable()
export class BookService extends AbstractRestService<IBook>  {

  private _bookUrl = 'http://localhost:57347/api/books';
  //private _bookUrl = 'http://192.168.3.59/api/books';
  constructor(_http: HttpClient) {
    super(_http, 'http://localhost:57347/api/books');
    //super(_http, 'http://192.168.3.59/api/books');
  }

  getBooksByCategory(categoryId: string): Observable<IBook[]> {
    return this._http.get<IBook[]>(this._bookUrl + '/category/' + categoryId);
  }

}
