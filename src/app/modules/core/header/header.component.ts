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
    this.dataSharingService.dataEmitter.subscribe(data => {
      this.loggedIn = data;
    });
  }
  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }
}
