import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserRegisterModel } from 'src/app/models/register.model';
import { UserActions } from 'src/app/state-management/user/user.action';
import { UserStateSelector } from 'src/app/state-management/user/user.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Select(UserStateSelector.formLoading) loading$: Observable<boolean>;
  registerForm: FormGroup;
  hide = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      displayName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  saveUser(): void {
    const model = new UserRegisterModel();
    model.username = this.registerForm.get('username')!.value;
    model.displayName = this.registerForm.get('displayName')!.value;
    model.password = this.registerForm.get('password')!.value;
    this.store.dispatch(new UserActions.RegisterUser(model)).subscribe(res => {
      this.dialog.closeAll();
    }, err =>  {
      this.dialog.closeAll();
    });
  }

  close() {
    this.dialog.closeAll();
  }

}
