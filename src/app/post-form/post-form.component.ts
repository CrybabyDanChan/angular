import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.less']
})
export class PostFormComponent implements OnInit {

  @Output() onItem: EventEmitter<Post> = new EventEmitter();
  @ViewChild('titleInput', { static: false }) inputRef: ElementRef;

  title = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCreatePost(): void {
    const item = {
      title: this.title
    };

    this.onItem.emit(item);
    this.title = '';
  }

}
