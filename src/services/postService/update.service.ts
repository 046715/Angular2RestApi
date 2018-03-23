import { NotFoundError } from './../../Common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from '../../Common/app-error';
import { BadInputError } from '../../Common/bad-input-error';

@Injectable()
export class PostUpdateService {
  private url="http://jsonplaceholder.typicode.com/posts"

  constructor(private http:Http) { }

  updatePosts(post){
    return this.http.put(this.url+'/'+post.id,JSON.stringify(post))
    .catch(
      (error:Response) => {
        return Observable.throw(new AppError(error))
      }
    );
  }
}


