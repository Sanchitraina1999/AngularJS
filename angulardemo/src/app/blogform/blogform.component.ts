import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {

  categories: string[]
  constructor(private service: BlogService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.categories = ['Technical', 'Fiction', 'Education'];
  }

  push(blog: Blog){
    this.service.addBlog(blog);
  }

}
