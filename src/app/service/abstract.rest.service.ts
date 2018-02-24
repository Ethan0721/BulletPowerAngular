
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'


export abstract class AbstractRestService<T> {
  constructor(protected _http: HttpClient, protected actionUrl: string) {
  }

  getAll(): Observable<T[]> {
    return this._http.get(this.actionUrl)
        .map(resp =>resp as T[]);
  }
}