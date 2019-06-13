import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Injeção de dependência no angular */
@Injectable({
  providedIn: 'root'
})
export class VagaService {

  apiUrl = 'http://localhost:8081/vagas';

  constructor(private httpClient: HttpClient) { }
  
  listar(){
    return this.httpClient.get(this.apiUrl); // Retorna um observable
  }

  adicionar(vaga : any){
    return this.httpClient.post(this.apiUrl, vaga);
  }

}
