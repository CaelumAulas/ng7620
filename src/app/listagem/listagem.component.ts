import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos

  //injecao de dependencia fazendo inferencia de tipo
  constructor(private servico: FotoService) {
    servico.listar()
          .subscribe(
            resposta => { //arrow function
              this.listaFotos = resposta
            }
          )
  }

  ngOnInit() {
  }

}
