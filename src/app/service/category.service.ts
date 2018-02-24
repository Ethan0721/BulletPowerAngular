import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {ICategory} from '../shared/Category';
import { AbstractRestService } from './abstract.rest.service';

@Injectable()
export class CategoryService extends AbstractRestService<ICategory> {
  private _categoryUrl = 'http://localhost:57347/api/categories';
  constructor(public _http: HttpClient) {
    super(_http, 'http://localhost:57347/api/categories');
}

getCategories(): Observable<ICategory[]> {
      return this._http.get<ICategory[]>(this._categoryUrl); //options
    }
    
}
