import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseDtoListResponse, BaseDtoResponse } from '../models/base-response.model';
import { CreateRoomModel, Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = `${environment.API_BASE_URL}/room`;

  constructor(private http: HttpClient) { }

  public createRoom(model: CreateRoomModel): Observable<BaseDtoResponse<Room>> {
    return this.http.post<BaseDtoResponse<Room>>(`${this.apiUrl}`, model);
  }

  public getRoomById(id: string):  Observable<BaseDtoResponse<Room>> {
    return this.http.get<BaseDtoResponse<Room>>(`${this.apiUrl}/${id}`);
  }

  public listAllRooms(): Observable<BaseDtoListResponse<Room>> {
    return this.http.get<BaseDtoListResponse<Room>>(`${this.apiUrl}`);
  }

  public deleteRoom(id: string):  Observable<BaseDtoResponse<Room>> {
    return this.http.delete<BaseDtoResponse<Room>>(`${this.apiUrl}/${id}`);
  } 
}
