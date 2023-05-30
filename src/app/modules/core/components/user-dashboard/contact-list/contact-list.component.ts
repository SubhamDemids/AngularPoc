import { Component , OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email','phone','website'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();


  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      const modifiedData = response.map((item:any) => {
        return {
          id: item.id,
          email: item.email,
          name: item.name,
          phone:item.phone,
          website:item.website
        };
      });
      this.dataSource = new MatTableDataSource(modifiedData);
    });
  }
}
