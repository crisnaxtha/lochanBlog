import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/site/home/home.component';
import { PostDetailsComponent } from './components/site/post-details/post-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'post/:id', component: PostDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
