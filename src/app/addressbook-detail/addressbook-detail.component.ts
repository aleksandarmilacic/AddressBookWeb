import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Contact } from '../models/contact';
import {ModalDeleteComponent} from '../modal-delete/modal-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addressbook-detail',
  templateUrl: './addressbook-detail.component.html',
  styleUrls: ['./addressbook-detail.component.css']
})
export class AddressbookDetailComponent implements OnInit {

  contact: Contact = {
    address: '',
    created: null,
    modified: null,
    firstName: '',
    id: '',
    lastName: '',
    telephoneNumber: '',
  };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.getContactDetails(this.route.snapshot.params.id);
  }

  getContactDetails(id) {
    this.api.getContact(id)
      .subscribe(data => {
        this.contact = data;
        console.log(this.contact);
        this.isLoadingResults = false;
      });
  }

  deleteContact(id: string) {
    this.isLoadingResults = true;
    let modal = this.modalService.open(ModalDeleteComponent);
    modal.componentInstance.id = id;
    modal.componentInstance.message = "Are you sure you want to delete this entery? Id: " + id;
    modal.result.finally(() => {
      this.isLoadingResults = false;
    });
  }


}
