import { Component, OnInit } from '@angular/core';


import { LoginComponent } from '../../external-pages/login/login.component';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
  private modalService: NgbModal,
 
    ) { 
    
}

  ngOnInit() {
  }

  openModalWithComponent() {
     this.modalService.open(LoginComponent,{ size: 'lg'});
      
    }
    openModalComponent() {
     
     }
     }

