import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { AllDataComponent } from './Components/all-data/all-data.component';
import { HttpService } from './Services/http.service';
import { Routes, RouterModule } from '@angular/router';

const appRouter:Routes=[
  { path:"allData", component:AllDataComponent },
  { path:"sendData", component:FormComponent},
  { path: '', redirectTo: '/sendData', pathMatch: 'full' }
  

]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AllDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
