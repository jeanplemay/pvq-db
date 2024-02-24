import {HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';

import {PenalityFormatterPipe, PointsFormatterPipe, TimeFormatterPipe} from './pipes/pipes';

import {HomeComponent} from './views/home/home.component';
import {SkaterComponent} from './views/skater/skater.component';
import { DataService } from './services/data.service';

export function dataInit(dataService: DataService) {
    return () => {
      return dataService.load()
    };
  }


@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        PenalityFormatterPipe,
        PointsFormatterPipe,
        TimeFormatterPipe,
        HomeComponent,
        SkaterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: dataInit,
            multi: true,
            deps: [DataService]
          }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}