import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './lib/components/components.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ArticuloComponent } from './articulo/articulo.component';

import { ArticulosService } from './servicios/articulos.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    NavbarComponent,
    EmpresaComponent,
    InicioComponent,
    ContactoComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
