import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';


import { HomeComponent } from './components/site/home/home.component';

import { RouterModule, Routes } from '@angular/router';

import { BlogService } from './services/blog.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
