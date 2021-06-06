import { Component, OnInit } from '@angular/core';
import { blogs } from '../model/bloglist';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs: Blog[]
  constructor() { }

  ngOnInit(): void {
    this.blogs = blogs;
  }

}
