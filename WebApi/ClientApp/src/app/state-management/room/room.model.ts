import { Room } from "src/app/models/room.model";

export class RoomStateModel {
    roomDetails: Room;
    roomId: string;
    formLoading: boolean;
    allRooms: Room[];
    loading: boolean;
}