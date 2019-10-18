import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookDetailComponent } from './addressbook-detail.component';

describe('AddressbookDetailComponent', () => {
  let component: AddressbookDetailComponent;
  let fixture: ComponentFixture<AddressbookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressbookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
