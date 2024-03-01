// AppModule.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Application1Component } from './application1/application1.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContenuComponent } from './contenu/contenu.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './components/header/inscription/inscription.component';
import { ConnexionComponent } from './components/header/connexion/connexion.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PantalanComponent } from './components/pantalan/pantalan.component';
import { VesteComponent } from './components/veste/veste.component';
import { ShirtComponent } from './components/shirt/shirt.component';
import { Chose1Component } from './components/chose1/chose1.component';
import { VmaComponent } from './components/vma/vma.component';
import { TransitTimeComponent } from './components/transit-time/transit-time.component';
import { Accessoire1Component } from './components/accessoire1/accessoire1.component';
import { SearchService } from './search.service';
import { HeaderComponent } from './header/header.component';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    AppComponent,
    Application1Component,
    AjoutComponent,
    ListComponent,
    MenuComponent,
    HomeComponent,
    ContenuComponent,
    FooterComponent,
    InscriptionComponent,
    ConnexionComponent,
    ContactComponent,
    ContactsComponent,
    PantalanComponent,
    VesteComponent,
    ShirtComponent,
    Chose1Component,
    Accessoire1Component,
    VmaComponent,
    TransitTimeComponent,
    HeaderComponent,
    HeadComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    SearchService, // Provide your service here
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
