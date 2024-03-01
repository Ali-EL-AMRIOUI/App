import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PantalanComponent } from './components/pantalan/pantalan.component';
import { Chose1Component } from './components/chose1/chose1.component';
import { VmaComponent } from './components/vma/vma.component';
import { TransitTimeComponent } from './components/transit-time/transit-time.component';
import { MenuComponent } from './menu/menu.component';
import { Accessoire1Component } from './components/accessoire1/accessoire1.component';

const routes: Routes = [
  { path: 'ajout', component: AjoutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'subscribe', component: ListComponent},
  { path: 'contacts', component: ContactsComponent} ,
  { path: 'clothing', component: PantalanComponent},
  { path: 'choses', component: Chose1Component},
  { path: 'vma', component: VmaComponent},
  { path: 'calculate', component: Accessoire1Component},
  { path: 'transitTime', component: TransitTimeComponent} ,
  { path: 'menu', component: MenuComponent},
  











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
