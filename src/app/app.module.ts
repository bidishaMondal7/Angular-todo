import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTabComponent,
    ListComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
