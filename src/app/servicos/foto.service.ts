import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

@Injectable()
export class FotoService {

    url = 'http://localhost:3000/v1/fotos/'

    cabecalho = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<Object>{
        return this.conexaoApi.get(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Object>{
        return this.conexaoApi.post(this.url, foto, this.cabecalho)
    }

    deletar(){}

    consultar(){}

    alterar(){}

}