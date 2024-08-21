import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HttpClientConfigModule } from './configs/http-client-config-module/http-client-config-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
