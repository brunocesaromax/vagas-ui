import { Component, OnInit } from '@angular/core';
import { VagaService } from '../vaga.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-painel-vaga',
  templateUrl: './painel-vaga.component.html',
  styleUrls: ['./painel-vaga.component.css']
})
export class PainelVagaComponent implements OnInit {

  vaga = {};
  vagas = [];

  constructor(private vagaService: VagaService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.vagaService.listar()
      .subscribe(response => this.vagas = <any>response)
  }

  adicionar() {
    this.vagaService.adicionar(this.vaga)
      .subscribe(() => {
        this.vaga = {};
        this.consultar();

        this.messageService.add({
          severity: 'sucecess',
          summary: 'Vaga adicionada com sucesso'
        });
      },
      resposta => {
        let msg = 'Erro inesperado. Tente novamente.';

        if (resposta.error.message) {
          msg = resposta.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        });
      });
  }

}