import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs'
import { map, tap, take } from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
}
