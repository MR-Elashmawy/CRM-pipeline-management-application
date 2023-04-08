import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectservicesService} from './service/projectservices.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomPipePipe } from './custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    CustomPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [ProjectservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
