import { UserProfileModel } from 'src/app/models/user-profile.model';

export class UserStateModel {
    userProfile: UserProfileModel;
    isAuthenticated: boolean;
    formLoading: boolean;
    token: string
}