import { UserProfileModel } from "./user-profile.model";

export class UserLoginModel {
    username: string;
    password: string;
}

export class LoginResponseModel {
    token: string;
    expiration: Date;
    userProfile: UserProfileModel;
}