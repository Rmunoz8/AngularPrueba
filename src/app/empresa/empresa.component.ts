import { Component } from '@angular/core'; 
import { Empresa } from './empresa';
import { Empleado } from '../empleado/empleado';

@Component ({
    selector: 'app-empresa',
    templateUrl: './empresa.component.html',
    styleUrls: ['./empresa.component.css']
})
    export class EmpresaComponent{
        public nombre:string;
        public trabajadores:Array<Empleado>;
        public jefe:Empleado;
        public trabajador_externo:boolean;
        
        constructor(){
        }

        cambiarNombre(nombre){
            this.nombre = nombre;
        }

        cambiarExterno( valor ){
            this.trabajador_externo = valor;
        }
        
        ngOnInit(){  
            this.nombre  = 'Componente Empresa'; 	
            this.jefe = new Empleado('Javier',20,'Estudiantes',true);
            this.trabajadores = [
                new Empleado('Marta',35,'FrontEnd',true),
                new Empleado('Nuria',29,'BackEnd',true),
                new Empleado('Ángel',31,'Marketing',false)
            ];

            this.trabajador_externo = false;

            console.log(this.jefe);
            console.log(this.trabajadores);
        }   
}
