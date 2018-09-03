import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminBloodAddComponent } from './admin-blood-add/admin-blood-add.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AddEventComponent } from './add-event/add-event.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AdminHeaderComponent,
    AdminBloodAddComponent,
    AddUserComponent,
    AddEventComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
