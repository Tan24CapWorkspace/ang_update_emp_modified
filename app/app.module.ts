import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponent } from './app.addEmployee';
import {FormsModule} from '@angular/forms';
import {ShowEmp} from './app.showemp'
@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmp
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }