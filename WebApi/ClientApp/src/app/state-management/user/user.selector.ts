import { Selector } from "@ngxs/store";
import { UserStateModel } from "./user.model";
import { UserState } from "./user.state";

export class UserStateSelector {
    @Selector([UserState])
    static getUserProfile(state: UserStateModel) {
        return state.userProfile;
    }

    @Selector([UserState])
    static isAuthenticated(state: UserStateModel) {
        return state.isAuthenticated;
    }

    @Selector([UserState])
    static formLoading(state: UserStateModel) {
        return state.formLoading;
    }
}