import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { MainComponent } from './components/main/main.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionsComponent } from './components/actions/actions.component';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BannerComponent,
    FooterComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({state: appReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
