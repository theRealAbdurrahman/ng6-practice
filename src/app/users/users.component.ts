import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private dateService: DataService) { }

  ngOnInit() {
    this.dateService.getusers().subscribe(
      res => this.users = res,
      err => console.log(err),
      () => console.log(this.users)
    );
  }


}
