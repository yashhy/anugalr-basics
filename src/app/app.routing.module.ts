import { MyThirdCompComponent } from './my-third-comp/my-second-comp.component';
import { MySecondCompComponent } from './my-second-comp/my-second-comp.component';
import { AppComponent } from './app.component';
import { NgModule, PipeTransform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'c2', component: MySecondCompComponent },
  { path: 'c3', component: MyThirdCompComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
