import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/pages/clientes/clientes.page';

@Component({
	selector: 'app-cliente',
	templateUrl: './cliente.page.html',
	styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
	@Input() cliente: Cliente;

	constructor() {
		// Mock cliente structure to prevent initializer compiler error
		this.cliente = {
			uid: '',
			nome: '',
			cpf: '',
			endereco: {
				cep: '',
				logradouro: '',
                bairro: '',
				complemento: '',
				cidade: '',
				numero: 0
			},
			email: '',
			nascimento: '',
			image: ''
		}
	}

	ngOnInit() {
	}

	public save() {

	}

}