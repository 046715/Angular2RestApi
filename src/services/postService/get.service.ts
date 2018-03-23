import { NotFoundError } from './../../Common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from '../../Common/app-error';
import { BadInputError } from '../../Common/bad-input-error';

@Injectable()
export class PostGetService {
  private url="http://jsonplaceholder.typicode.com/posts"

  constructor(private http:Http) { }

  getPosts(){
    return this.http.get(this.url);
  }
}


