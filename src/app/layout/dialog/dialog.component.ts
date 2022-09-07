import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  faPound = faPoundSign;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialogRef: DialogRef) { }

  ngOnInit(): void {

    var initialValue: number;
    this.addUserForm = this.formBuilder.group({
      'mainLimit': new FormControl<User | null>(null, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]\d*$/)]),
      'mainRetention': new FormControl<User | null>(null, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]\d*$/)]),
      'executionType': new FormControl<User | null>(null, [Validators.required])
    })

  }

  createUser(){

    this._snackBar.open('Executing calculation, please wait...', 'Close', {
      duration: 2500
    });

    setTimeout(() => {
      this.dialogRef.close();
    }
    , 3000);

  }

  onNoClick(){
    this.dialogRef.close();
  }

}
