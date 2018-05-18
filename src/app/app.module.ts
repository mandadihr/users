import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {CommonService} from './common.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, NgbModule.forRoot()
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}