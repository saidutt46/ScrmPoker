import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiuxModule } from './modules/uiux.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NOTIFICATION_SERV_TOKEN, NotificationService } from './services/notification.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserState } from './state-management/user/user.state';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { SessionComponent } from './components/session/session.component';
import { RoomState } from './state-management/room/room.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    CreateRoomComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiuxModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([
      UserState,
      RoomState
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({key: 'user'}),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [
    { provide: NOTIFICATION_SERV_TOKEN, useClass: NotificationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
