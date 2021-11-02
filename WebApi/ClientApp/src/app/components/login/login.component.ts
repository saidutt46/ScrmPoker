import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserLoginModel } from 'src/app/models/login.model';
import { NOTIFICATION_SERV_TOKEN, NotificationService } from 'src/app/services/notification.service';
import { UserActions } from 'src/app/state-management/user/user.action';
import { UserStateSelector } from 'src/app/state-management/user/user.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Select(UserStateSelector.formLoading) loading$: Observable<boolean>;
  loginForm: FormGroup;
  hide = false;
  
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(NOTIFICATION_SERV_TOKEN) private notifier: NotificationService,
    private store: Store,
    private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  close() {
    this.dialog.closeAll();
  }

  save() {
    const model = new UserLoginModel();
    model.username = this.loginForm.get('username')!.value;
    model.password = this.loginForm.get('password')!.value;
    this.store.dispatch(new UserActions.LoginUser(model)).subscribe(res => {
      this.dialogRef.close('success');
    }, err =>  {
      this.dialog.closeAll();
    });
  }

}
