import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class ModalErrorComponent {
  @Input() message;
  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  

}
