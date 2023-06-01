import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../service/data-share.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataSharingService: DataShareService) {}

  loggedIn: boolean = false;
  isPopupOpen = false;

  ngOnInit() {
  
    this.dataSharingService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    
  }
  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }
}
