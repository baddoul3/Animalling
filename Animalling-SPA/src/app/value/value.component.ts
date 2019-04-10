import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  ngOnInit() {
    this.getValues();
  }

  constructor(private http: HttpClient) { }

  getValues() {
    this.http.get('https://localhost:44369/api/values')
    .subscribe ( response => {this.values = response; },
      error  => {console.log(error); }

    );

  }

}
