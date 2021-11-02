import { UserLoginModel } from "src/app/models/login.model";
import { UserRegisterModel } from "src/app/models/register.model";

export namespace UserActions {
    export class LoginUser {
        static readonly type = '[USER] LOGIN';
        constructor(public payload: UserLoginModel) { }
    }

    export class RegisterUser {
        static readonly type = '[USER] REGISTER';
        constructor(public payload: UserRegisterModel) { }
    }

    export class RefreshUserDetails {
        static readonly type = '[USER] REFRESH';
        constructor(public payload: string) { }
    }

    export class LogoutUser {
        static readonly type = '[USER] LOGOUT';
    }
}