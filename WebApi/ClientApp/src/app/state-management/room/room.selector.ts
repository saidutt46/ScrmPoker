import { Selector } from "@ngxs/store";
import { RoomStateModel } from "./room.model";
import { RoomState } from "./room.state";

export class RoomStateSelector {

    @Selector([RoomState])
    static getCurrentRoomId(state: RoomStateModel){
        return state.roomId;
    }

    @Selector([RoomState])
    static getRoomDetails(state: RoomStateModel){
        return state.roomDetails;
    }

    @Selector([RoomState])
    static getAllRooms(state: RoomStateModel){
        return state.allRooms;
    }

    @Selector([RoomState])
    static formLoading(state: RoomStateModel){
        return state.formLoading;
    }

    @Selector([RoomState])
    static loading(state: RoomStateModel){
        return state.loading;
    }
}