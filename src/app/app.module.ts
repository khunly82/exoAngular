import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonImagePipe } from './pipes/pokemon-image.pipe';
import { IndexComponent } from './pages/index/index.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TypeComponent } from './components/type/type.component';
import { DetailsComponent } from './components/details/details.component';
import { ChartModule } from 'primeng/chart';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardModule } from 'primeng/card';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonImagePipe,
    IndexComponent,
    TypeComponent,
    DetailsComponent,
    ProfileComponent,
    PersonalInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    ChartModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
