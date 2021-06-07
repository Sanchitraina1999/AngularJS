import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  private blogs:Blog[];
  constructor(private service: BlogService) { 
    this.blogs = [];
  }
  ngOnInit(): void {
    this.blogs = this.service.getBlogs();
  }
}
