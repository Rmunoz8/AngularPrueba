import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../servicios/articulos.service';

@Component({
  selector: 'pe-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {


  public articulos: Array<any>;
  constructor(public articuloService:ArticulosService) {}

   getArticulos(): void{
     this.articuloService.getArticulos().subscribe(
       result=>{
         // if(result.code !== 200){
         //   this.articulos = result;
         // } else {
         //   this.articulos = result;
         // }
         this.articulos = result;
         console.log(this.articulos);
       },
       error => {
         console.log(<any>error);
       }
     );
   }

  ngOnInit() {
    this.getArticulos();
  }

}
