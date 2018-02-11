import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent} from './contacto/contacto.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'empresa', component:EmpresaComponent},
  {path:'empleado', component:EmpleadoComponent},
  {path:'**',component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'empledao/:id', component:EmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
