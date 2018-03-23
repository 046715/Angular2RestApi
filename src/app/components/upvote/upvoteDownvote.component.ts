import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'updownvote',
  templateUrl: '../../htmls/upvote/upvoteDownvote.component.html'
})
export class UpvoteDownvoteComponent {
  
  @Input()
  count: number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  
  increment() {
    this.count++;
    this.change.emit(this.count);
  }
  
  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
  
}