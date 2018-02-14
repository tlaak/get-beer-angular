import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetBeerButtonComponent } from './components/get-beer-button/get-beer-button.component';

@NgModule({
  declarations: [AppComponent, GetBeerButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
