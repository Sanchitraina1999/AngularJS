import { Injectable } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[];
  constructor() { 
    this.blogs = blogs;
  }
  addBlog(blog: Blog){

  }
}
