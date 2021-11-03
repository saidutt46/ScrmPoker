import { CreateRoomModel } from "src/app/models/room.model";

export namespace RoomActions {

    export class CreateRoom {
        static readonly type = '[ROOM] CREATE';
        constructor(public payload: CreateRoomModel) { }
    }

    export class GetRoomById {
        static readonly type = '[ROOM] BY ID';
        constructor(public payload: string) { }
    }

    export class DeleteRoomById {
        static readonly type = '[ROOM] DELETE BY ID';
        constructor(public payload: string) { }
    }

    export class GetAllRooms {
        static readonly type = '[ROOM] LIST';
    }
}