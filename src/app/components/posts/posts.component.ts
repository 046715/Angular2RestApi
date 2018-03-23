import { NotFoundError } from '../../../Common/not-found-error';
import { AppError } from '../../../Common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostAddService } from '../../../services/postService/add.service';
import { PostDeleteService } from '../../../services/postService/delete.service';
import { PostGetService } from '../../../services/postService/get.service';
import { PostUpdateService } from '../../../services/postService/update.service';
import { Observable } from 'rxjs/Observable';
import { BadInputError } from '../../../Common/bad-input-error';

interface AppState {
  LikeIds: Array<number>;
}

@Component({
  selector: 'app-posts',
  templateUrl: '../../htmls/posts/posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  posts: any[];
  likeIds: Observable<Array<number>>; ngOnInit() {
    this.postgetService.getPosts()
      .subscribe(
      response => {
        this.posts = response.json();
        this.posts.forEach(post => {post.upvote = 0})
      }
      )
  }
  constructor(private postaddservice: PostAddService, private postdeleteservice :PostDeleteService, private postupdateService : PostUpdateService, private postgetService : PostGetService) {
  }

  createPost(titleInput: HTMLInputElement) {
    if (titleInput.value.trim() === '') {
      alert('Please enter some text');
      return;
    }
    let post: any = { title: titleInput.value };
    titleInput.value = '';
    this.postaddservice.createPosts(post)
      .subscribe(
      response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error: AppError) => {
        if (error instanceof BadInputError)
          console.log(error);
      }
      );
  }

  updatePost(post, index) {
    this.postupdateService.updatePosts(post)
      .subscribe(
      response => {
        this.posts[index] = post;
        alert('Post updated successfully');
      },
      (error: AppError) => {
        this.posts[index] = post;
        console.log(error);
      }
      );
  }
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.postdeleteservice.deletePosts(post.id)
      .subscribe(
      response => {
        this.posts.splice(index, 1);
        alert('Post deleted successfully');
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) 
          this.posts.splice(index, 1);
        else
          console.log(error);;
      }
      );
  }

  countChange(event,index) {
    this.posts[index].upvote = event;
  }
}
