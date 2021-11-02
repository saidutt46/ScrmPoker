import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserActions } from 'src/app/state-management/user/user.action';
import { UserStateSelector } from 'src/app/state-management/user/user.selector';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Select(UserStateSelector.isAuthenticated) isAuthenticated$: Observable<boolean>;
  authenticated: boolean;

  constructor(
    private dialog: MatDialog,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe(res => {
      this.authenticated = res;
    });
  }

  registerUser(): void {
    this.dialog.open(RegisterComponent, {
      width: '30%',
      height: 'auto',
      panelClass: 'custom-dialog'
    })

  }

  loginUser(): void {
    this.dialog.open(LoginComponent, {
      width: '30%',
      height: 'auto',
      panelClass: 'custom-dialog'
    })
  }

  logoutUser(): void {
    this.store.dispatch([
      new UserActions.LogoutUser()
    ]);
  }

}
