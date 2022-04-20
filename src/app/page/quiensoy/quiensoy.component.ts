import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {
  ImagePath: string;

  constructor() { 
        //image location
        this.ImagePath = './yo.JPG'

  }

  ngOnInit(): void {
  }

}
