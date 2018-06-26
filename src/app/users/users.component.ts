import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger, state, style, animate, transition, keyframes, query, stagger
} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
          [
            style({
              opacity: 0, transform: "translateY(-15px)"
            }),
            stagger('50ms',
              animate('550ms ease-out',
                style({ opacity: 1, transform: "translateY(0px)" }))
            )
          ], { optional: true }),
        query(':leave', animate('550ms ease-out', style({ opacity: 0, transform: "translateY(0px)" })), { optional: true })
      ])
    ])
  ]
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
