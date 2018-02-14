import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-beer-button',
  templateUrl: './get-beer-button.component.html',
  styleUrls: ['./get-beer-button.component.css']
})
export class GetBeerButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getBeer(event: Event) {
    event.preventDefault();

    console.log('Get Beer clicked');
  }

}
