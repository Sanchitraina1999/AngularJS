import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {

  categories: string[]
  constructor() {
    this.categories = [];
  }

  ngOnInit(): void {
    this.categories = ['Technical', 'Fiction', 'Education'];
  }

}
