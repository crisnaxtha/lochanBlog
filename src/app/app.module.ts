import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
