import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { OperationsService } from './operations.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InputsComponent, ResultComponent ],
  bootstrap:    [ AppComponent ],
  providers: [OperationsService]
})
export class AppModule { }
