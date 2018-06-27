import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: any;
  user: any;
  subscription: any;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.getPosts()
  }
  getPosts() {
    this.subscription = this.data.getPosts().subscribe(data => this.posts = data)
  }
  postDetails(post) {
    console.log(post.userId)
    return post.userId;
  }
  // getUserByID(id) {
  //   this.data.getUserDetail(this.postDetails())
  // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  createPost() {
    this.router.navigate(["/create-post"])
  }

}
