import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookAddComponent } from './addressbook-add.component';

describe('AddressbookAddComponent', () => {
  let component: AddressbookAddComponent;
  let fixture: ComponentFixture<AddressbookAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressbookAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
