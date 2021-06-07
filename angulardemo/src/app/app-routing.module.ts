import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogformComponent } from './blogform/blogform.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule, BloglistComponent, BlogformComponent],
  declarations: [
    BloglistComponent,
    BlogformComponent
  ]
})
export class AppRoutingModule { }
