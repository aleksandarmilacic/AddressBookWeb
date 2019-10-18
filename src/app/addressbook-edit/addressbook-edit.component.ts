import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../addressbook-add/addressbook-add.component';

@Component({
  selector: 'app-addressbook-edit',
  templateUrl: './addressbook-edit.component.html',
  styleUrls: ['./addressbook-edit.component.css']
})
export class AddressbookEditComponent implements OnInit {
  contactForm: FormGroup;
  id: string;
  firstName = '';
  lastName = '';
  address = '';
  telephoneNumber = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getContact(this.route.snapshot.params['id']);
    this.contactForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      telephoneNumber: [null, Validators.compose([Validators.required, Validators.pattern(/^[+]{1}[0-9]*$/)])],
      id: [null, Validators.required]
    });
  }

  getContact(id: string) {
    this.api.getContact(id).subscribe(data => {
      this.id = data.id;
      this.contactForm.setValue({
        telephoneNumber: data.telephoneNumber,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        id: data.id
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    console.log(form);
    this.api.updateContact(form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/address']);
        }, (err) => {

          console.log(err);

          this.isLoadingResults = false;
        }
      );
  }

  addressDetails() {
    this.router.navigate(['/address-details', this.id]);
  }

}


