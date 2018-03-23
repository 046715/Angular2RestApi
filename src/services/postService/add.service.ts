import { NotFoundError } from './../../Common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from '../../Common/app-error';
import { BadInputError } from '../../Common/bad-input-error';

@Injectable()
export class PostAddService {
  private url="http://jsonplaceholder.typicode.com/posts"

  constructor(private http:Http) { }

  createPosts(post){
    return this.http.post(this.url,JSON.stringify(post))
    .catch(
      (error:Response) => {
        if (error.status === 400)
          return Observable.throw(new BadInputError(error.json()));

        return Observable.throw(new AppError(error))
      }
    )
  }
}


