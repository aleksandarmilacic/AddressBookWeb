import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-addressbook-add',
  templateUrl: './addressbook-add.component.html',
  styleUrls: ['./addressbook-add.component.css']
})
export class AddressbookAddComponent implements OnInit {

  contactForm: FormGroup;
  firstName = '';
  lastName = '';
  address = '';
  telephoneNumber = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      telephoneNumber: [null, Validators.compose([Validators.required, Validators.pattern(/^[+]{1}[0-9]*$/)])]
    });
  }
  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addContact(form)
      .subscribe((res: { [x: string]: any; }) => {
          const contact = res;
          this.isLoadingResults = false;
          this.router.navigate(['/address-details', contact.id]);
        }, (err) => {
          console.log(err);

          this.isLoadingResults = false;
        });
  }
}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
