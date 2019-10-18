import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class ModalDeleteComponent {

  @Input() message;
  @Input() id;
  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal, public activeModal: NgbActiveModal, private api: ApiService) {}

  delete() {
    this.api.deleteContact(this.id)
      .subscribe(res => {
          this.router.navigate(['/address']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
