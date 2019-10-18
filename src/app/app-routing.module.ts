import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressbookComponent } from './addressbook/addressbook.component';
import { AddressbookDetailComponent } from './addressbook-detail/addressbook-detail.component';
import { AddressbookAddComponent } from './addressbook-add/addressbook-add.component';
import { AddressbookEditComponent } from './addressbook-edit/addressbook-edit.component';

const routes: Routes = [
  {
    path: 'address',
    component: AddressbookComponent,
    data: { title: 'Address list' }
  },
  {
    path: 'address-details/:id',
    component: AddressbookDetailComponent,
    data: { title: 'Address Details' }
  },
  {
    path: 'address-add',
    component: AddressbookAddComponent,
    data: { title: 'Add Address' }
  },
  {
    path: 'address-edit/:id',
    component: AddressbookEditComponent,
    data: { title: 'Edit Address' }
  },
  { path: '',
    redirectTo: '/address',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
