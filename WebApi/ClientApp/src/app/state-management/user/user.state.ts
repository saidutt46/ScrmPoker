import { Inject, Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { throwError } from "rxjs";
import { NOTIFICATION_SERV_TOKEN, NotificationService } from "src/app/services/notification.service";
import { UserService } from "src/app/services/user.service";
import { UserActions } from "./user.action";
import { UserStateModel } from "./user.model";
import { catchError, tap } from 'rxjs/operators';
import { LoginResponseModel } from "src/app/models/login.model";
import { UserRegisterModel } from "src/app/models/register.model";
import { UserProfileModel } from "src/app/models/user-profile.model";


@State<UserStateModel>({
    name: 'user',
    defaults: {
        userProfile: new UserProfileModel,
        token: '',
        isAuthenticated: false,
        formLoading: false
    }
})

@Injectable()
export class UserState {
    constructor(
        @Inject(NOTIFICATION_SERV_TOKEN) private notifier: NotificationService,
        private authService: UserService,
        private store: Store
    ) {}

    @Action(UserActions.LoginUser)
    loginUser({patchState}: StateContext<UserStateModel>, {payload}: any) {
      patchState({
        formLoading: true
      });
      return this.authService.login(payload).pipe(
        catchError((x) => {
          return throwError(x);
        }),
        tap((res: LoginResponseModel) => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('currentUser', res.userProfile.id);
            const token = localStorage.getItem('token');
            patchState({
              userProfile: res.userProfile,
              isAuthenticated: res.token ? true : false,
              token: res.token,
              formLoading: false
            });
            this.notifier.successNotification(`${res.userProfile.userName.toUpperCase()}: successfully logged In`);
        }, err => {
          patchState({
            formLoading: false
          });
          this.notifier.errorNotification(`Error: ${err.error}`);
        })
      );
    }

    @Action(UserActions.RegisterUser)
    registerUser({patchState}: StateContext<UserStateModel>, {payload}: any) {
      patchState({
        formLoading: true
      });
      return this.authService.registerUser(payload).pipe(
        catchError((x) => {
          return throwError(x);
        }),
        tap((res) => {
            patchState({
              formLoading: false
            });
            this.notifier.successNotification(`${res.message}`);
        }, err => {
          patchState({
            formLoading: false
          });
          this.notifier.errorNotification(`Error: ${err.error.message}`);
        })
      );
    }

    @Action(UserActions.LogoutUser)
    logoutUser({patchState}: StateContext<UserStateModel>) {
      patchState({
        userProfile: undefined,
        isAuthenticated: false
      });
      this.notifier.successNotification(`User logged out successfully!`);
    }

}