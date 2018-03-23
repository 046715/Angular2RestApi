import { NotFoundError } from './../../Common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from '../../Common/app-error';
import { BadInputError } from '../../Common/bad-input-error';

@Injectable()
export class PostDeleteService {
  private url="http://jsonplaceholder.typicode.com/posts"

  constructor(private http:Http) { }

  deletePosts(id){
    return this.http.delete(this.url+'/'+id)
    .catch(this.handleError);
  }

  private handleError(error: Response)
  {
    if (error.status === 404)
    return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error))
  }
}


