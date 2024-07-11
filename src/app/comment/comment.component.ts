import { Component, Input } from '@angular/core';
import { comment } from '../shared/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input()comment!:comment;

}
