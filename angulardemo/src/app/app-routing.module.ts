import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogformComponent } from './blogform/blogform.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'createblog', component: BlogformComponent },
  { path: 'blogs', component: BloglistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule, BloglistComponent, BlogformComponent],
  declarations: [
    BloglistComponent,
    BlogformComponent
  ]
})
export class AppRoutingModule { }
