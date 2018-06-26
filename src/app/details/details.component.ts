import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService) { }
  userID: Number;
  user: Object;
  ngOnInit() {
    this.route.params.subscribe(
      (param) => {
        console.log(param);
        this.userID = param.id;
        console.log(this.userID);

      }
    )
    this.getUserDetails();
    // failed try to pass the user data to the route and use it here
    // this.route.data.subscribe(
    //   data => console.log(data)
    // )

  }
  getUserDetails() {
    this.data.getUserDetail(this.userID).subscribe(
      user => this.user = user,
      err => console.log(err),

    )
  }

}
