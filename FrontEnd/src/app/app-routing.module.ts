import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { HomeComponent } from './home/home.component';
import { ListaTagsComponent } from './lista-tags/lista-tags.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-persona', component: ListaPersonaComponent },
  { path: 'detalle-persona/:id', component: DetallePersonaComponent },
  { path: 'lista-tags', component: ListaTagsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
