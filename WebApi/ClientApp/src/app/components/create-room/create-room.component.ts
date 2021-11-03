import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CreateRoomModel } from 'src/app/models/room.model';
import { RoomActions } from 'src/app/state-management/room/room.action';
import { RoomStateSelector } from 'src/app/state-management/room/room.selector';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  @Select(RoomStateSelector.getCurrentRoomId) currentRoomId$: Observable<string>;

  createRoomForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createRoomForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      tagLine: ['', [Validators.minLength(2)]]
    })
  }

  createRoom(): void {
    const model = new CreateRoomModel();
    model.name = this.createRoomForm.get('name')?.value;
    model.tagLine = this.createRoomForm.get('tagLine')?.value;
    this.store.dispatch([
      new RoomActions.CreateRoom(model)
    ]).toPromise().then(s => {
      this.currentRoomId$.subscribe(id => {
        this.router.navigateByUrl(`session/${id}`);
      });
    });
  }

}
