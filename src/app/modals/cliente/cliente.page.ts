import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente } from 'src/app/pages/clientes/clientes.page';
import { GeneralService } from 'src/app/services/general.service';

@Component({
	selector: 'app-cliente',
	templateUrl: './cliente.page.html',
	styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
	@Input() cliente: Cliente;
	public newClient: boolean = false;

	constructor(
		private modalController: ModalController,
		private general: GeneralService
	) {
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
		if (!this.cliente) {
			this.newClient = true;
			this.cliente = {
				uid: this.general.generateUniqueUid(),
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
	}

	public save() {
		return this.modalController.dismiss();
	}

	public remove() {
		return this.modalController.dismiss();
	}

}