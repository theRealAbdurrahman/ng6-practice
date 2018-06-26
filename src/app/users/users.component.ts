import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private dateService: DataService, private router: Router) { }

  ngOnInit() {
    this.dateService.getUsers().subscribe(
      res => this.users = res,
      err => console.log(err),
      () => console.log(this.users)
    );
  }
  goToDetails(user) {
    this.router.navigate(['/details', user.id], user)
  }


}
