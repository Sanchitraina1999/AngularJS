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
    console.log(blogs);
  }
  addBlog(blog: Blog){
    let id = this.blogs.length;
    blog.id = id
    this.blogs.unshift(blog);
    console.log(blogs);
  }
}
