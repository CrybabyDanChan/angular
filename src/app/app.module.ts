import { SwitchComponent } from './switch/switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { StyleDirective } from './derectives/style.derective';
import { IfnotDirective } from './derectives/ifnot.directive';
import { HttpClientModule } from '@angular/common/http';
import { MultPipe } from './pipes/mult.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    SwitchComponent,
    MultPipe,
    FilterPipe,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
