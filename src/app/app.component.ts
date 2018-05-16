import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  listaFotos

  //injecao de dependencia fazendo inferencia de tipo
  constructor(conexaoApi: HttpClient){

    conexaoApi.get('http://localhost:3000/v1/fotos')
              .subscribe(
                resposta => { //arrow function
                  this.listaFotos = resposta
                }
              )    
  }
}