import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';

import { HomeComponent } from './components/site/home/home.component';
import { PostDetailsComponent } from './components/site/post-details/post-details.component';

import { BlogService } from './services/blog.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
