import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  displayedColumns: string[] = ['id', 'name', 'email','dob','location'];
  dataSource: MatTableDataSource<any>;

  jsonData: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com',dob:"20-05-1940",location:"Usa" },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com',dob:"20-05-1940",location:"Usa" },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com',dob:"20-05-1940",location:"Usa" },
    { id: 4, name: 'Jane Smith', email: 'jane@example.com',dob:"20-05-1940",location:"Usa" },
    { id: 5, name: 'Jane Smith', email: 'jane@example.com',dob:"20-05-1940",location:"Usa" },
    { id: 6, name: 'Jane Smith', email: 'jane@example.com',dob:"20-05-1940",location:"Usa" },
    { id: 7, name: 'Jane Smith', email: 'jane@example.com',dob:"20-05-1940",location:"Usa" },
    
   
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.jsonData);
  }
}
