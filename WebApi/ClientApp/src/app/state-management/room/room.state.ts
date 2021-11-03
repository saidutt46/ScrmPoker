import { Inject, Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Room } from "src/app/models/room.model";
import { NOTIFICATION_SERV_TOKEN, NotificationService } from "src/app/services/notification.service";
import { RoomService } from "src/app/services/room.service";
import { RoomActions } from "./room.action";
import { RoomStateModel } from "./room.model";
import { throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@State<RoomStateModel>({
    name: 'room',
    defaults: {
        roomDetails: new Room,
        roomId: '',
        formLoading: false,
        allRooms: [],
        loading: false
    }
})

@Injectable()
export class RoomState {
    constructor(
        @Inject(NOTIFICATION_SERV_TOKEN) private notifier: NotificationService,
        private roomService: RoomService
    ) {}

    @Action(RoomActions.CreateRoom)
    createRoom({patchState}: StateContext<RoomStateModel>, {payload}: any) {
        patchState({
            formLoading: true
        });
        return this.roomService.createRoom(payload).pipe(
            catchError((x) => {
              return throwError(x);
            }),
            tap((res) => {
                patchState({
                  roomDetails: res.payload,
                  roomId: res.payload.id,
                  formLoading: false
                });
            }, err => {
              patchState({
                formLoading: false
              });
              this.notifier.errorNotification(`Error: ${err.error}`);
            })
        );
    }

    @Action(RoomActions.GetRoomById)
    getRoomById({patchState}: StateContext<RoomStateModel>, {payload}: any){
        return this.roomService.getRoomById(payload).pipe(
            catchError((x) => {
              return throwError(x);
            }),
            tap((res) => {
                patchState({
                  roomDetails: res.payload,
                  roomId: res.payload.id,
                  formLoading: false
                });
            }, err => {
              patchState({
                formLoading: false
              });
              this.notifier.errorNotification(`Error: ${err.error}`);
            })
        );
    }

    @Action(RoomActions.DeleteRoomById)
    deleteRoomById({patchState}: StateContext<RoomStateModel>, {payload}: any){
        return this.roomService.deleteRoom(payload).pipe(
            catchError((x) => {
              return throwError(x);
            }),
            tap((res) => {
                this.notifier.successNotification(`Room cleared and gone`);
            }, err => {
              patchState({
                formLoading: false
              });
              this.notifier.errorNotification(`Error: ${err.error}`);
            })
        );
    }

    @Action(RoomActions.GetAllRooms)
    getAllRooms({patchState}: StateContext<RoomStateModel>) {
        patchState({
            loading: true
        });
        return this.roomService.listAllRooms().pipe(
            catchError((x) => {
              return throwError(x);
            }),
            tap((res) => {
                patchState({
                    allRooms: res.payload,
                    loading: false
                });
            }, err => {
              patchState({
                formLoading: false
              });
              this.notifier.errorNotification(`Error: ${err.error}`);
            })
        );
    }
}