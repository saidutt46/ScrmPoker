import { BaseResponse } from "./base-response.model";
import { UserProfileModel } from "./user-profile.model";

export class Room extends BaseResponse {
    name: string;
    tagLine: string;
    users: UserProfileModel[];
}

export class CreateRoomModel {
    name: string;
    tagLine: string;
}