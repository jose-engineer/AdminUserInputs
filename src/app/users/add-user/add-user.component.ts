import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  selected: string = 'Simple';

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    var initialValue: number;
    this.addUserForm = this.formBuilder.group({
      'mainLimit': new FormControl<User | null>(null, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]\d*$/)]),
      'mainRetention': new FormControl<User | null>(null, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]\d*$/)]),
      'executionType': new FormControl<User | null>(null, [Validators.required])
    })

  }

  createUser(){

    this.userService.addUser(this.addUserForm.value).subscribe({

      next: () => {
        this._snackBar.open('User was created with success, thanks', 'Close', {
          duration: 3000
        });
        //console.log('user created')
      },
      error: () => {
        this._snackBar.open('Unable to create', 'Close', {
          duration: 3000
        });
        //console.log('error')
      }

    });

    //console.log(this.addUserForm.value);
  }

  createUser2(){

    this.userService.addUser2(this.addUserForm.value).subscribe({

      next: () => {
        this._snackBar.open('User was created with success, thanks', 'Close', {
          duration: 3000
        });
        //console.log('user created')
      },
      error: () => {
        this._snackBar.open('Unable to create', 'Close', {
          duration: 3000
        });
        //console.log('error')
      }

    });

    //console.log(this.addUserForm.value);
  }

}
