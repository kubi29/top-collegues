import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService} from './shared/service/collegue.service'
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ClassiqueComponent } from './classique/classique.component';

const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, 
  { path: 'tableau', component: TableauComponent },
  { path: 'carrousel', component:  CarrouselComponent},
  { path: '**', redirectTo: 'classique'} 
  ];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    TableauComponent,
    CarrouselComponent,
    ClassiqueComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
