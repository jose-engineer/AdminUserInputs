import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

const ELEMENT_DATA: User[] = [
  {"id": 1, "benchmark1": 0.224, "benchmark2": 0.563, "date": "01/22/2017"},
  {"id": 2, "benchmark1": 0.781, "benchmark2": 0.453, "date": "04/18/2020"},
  {"id": 3, "benchmark1": 0.452, "benchmark2": 0.852, "date": "02/20/2022"},
  {"id": 4, "benchmark1": 0.513, "benchmark2": 0.189, "date": "02/22/2022"},
  {"id": 5, "benchmark1": 0.784, "benchmark2": 0.289, "date": "02/19/2020"},
  {"id": 6, "benchmark1": 0.895, "benchmark2": 0.345, "date": "02/26/2022"}
];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'benchmark1', 'benchmark2', 'date'];
  dataSource = ELEMENT_DATA;

  //listUsers2: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    // this.userService.getUsers2().subscribe(data => {
    //   this.listUsers2 = data;
    // });

  }

}
