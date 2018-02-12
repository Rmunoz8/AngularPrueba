import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component ({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit{
    public titulo:string ;
    public trabajadores:Array<Empleado>;
    public empleado:Empleado;
    public color:string;
    public color_seleccionado:string;
    private _route:ActivatedRoute;
    private route:Router;
    private params:Params;
    public parametro;

    constructor(){
      this.titulo  = "Componente Empleado";
      this.empleado = new Empleado('Marta',35,'FrontEnd',true);
      this.trabajadores = [
          new Empleado('Marta',35,'FrontEnd',true),
          new Empleado('Nuria',29,'BackEnd',true),
          new Empleado('Ángel',31,'Marketing',false)
      ];
    }

   ngOnInit(){
    this.color = 'red';
    this.color_seleccionado = '';
    // this._route.params.forEach((params:Params)=>{
    //   this.parametro = params['id'];
    //   console.log(this.parametro);
    // })
   }
}
