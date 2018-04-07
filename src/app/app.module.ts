import { MyThirdCompComponent } from './my-third-comp/my-second-comp.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyCitPipePipe } from './my-cit-pipe.pipe';
import { MySecondCompComponent } from './my-second-comp/my-second-comp.component';
import { MyColorDirectiveDirective } from './my-color-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyCitPipePipe,
    MySecondCompComponent,
    MyColorDirectiveDirective,
    MyThirdCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
