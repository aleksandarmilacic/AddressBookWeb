import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { AddressbookDetailComponent } from './addressbook-detail/addressbook-detail.component';
import { AddressbookAddComponent } from './addressbook-add/addressbook-add.component';
import { AddressbookEditComponent } from './addressbook-edit/addressbook-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    AddressbookDetailComponent,
    AddressbookAddComponent,
    AddressbookEditComponent,
    ModalErrorComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
  HttpClientModule,
  AppRoutingModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalErrorComponent, ModalDeleteComponent]
})
export class AppModule { }
