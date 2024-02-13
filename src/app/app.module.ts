import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MiniPostComponent } from './components/mini-post/mini-post.component';
import { SearchComponent } from './components/search/search.component';
import { CheckPipe } from './pipes/check.pipe';
import { ParentComponent } from './demo/parent/parent.component';
import { EnfantComponent } from './demo/enfant/enfant.component';
import { SiblingComponent } from './demo/sibling/sibling.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    MiniPostComponent,
    SearchComponent,
    CheckPipe,
    ParentComponent,
    EnfantComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Permet l'utilisation de [(ngModel)]
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
