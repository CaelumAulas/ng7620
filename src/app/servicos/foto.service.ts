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

    listar(): Observable<FotoComponent[]>{
        return this.conexaoApi.get<FotoComponent[]>(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<Object>{
        return this.conexaoApi.post(this.url, foto, this.cabecalho)
    }

    deletar(foto: FotoComponent){
        return this.conexaoApi.delete(this.url+foto._id)
    }

    consultar(fotoId: string): Observable<FotoComponent> {
        return this.conexaoApi.get<FotoComponent>(this.url+fotoId)
    }

    alterar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.put(this.url+foto._id
                                    ,foto
                                    ,this.cabecalho
                                )
    }

}