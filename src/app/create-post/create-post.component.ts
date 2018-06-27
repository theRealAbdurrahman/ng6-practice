import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post = {
    title: '',
    body: '',
    private: false,
    later: false,
    language: "",
  }
  options: String[] = ["arabic", "english", "german"]

  constructor() { }

  ngOnInit() {
  }
  submitMethod() {
    console.log(this.post);

  }
  test($event) {
    console.log("hi", $event);
    this.post.private = $event;

  }
  titleToUpperCase(value) { // capitalize first letter when user writes in the field
    if (value.length > 0) {
      this.post.title = value.charAt(0).toUpperCase() + value.slice(1)
    } else {
      this.post.title = value
    }
  }

}
