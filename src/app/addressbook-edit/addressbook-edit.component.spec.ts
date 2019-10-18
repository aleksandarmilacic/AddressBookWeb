import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookEditComponent } from './addressbook-edit.component';

describe('AddressbookEditComponent', () => {
  let component: AddressbookEditComponent;
  let fixture: ComponentFixture<AddressbookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressbookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
