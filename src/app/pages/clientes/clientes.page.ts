import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientePage } from 'src/app/modals/cliente/cliente.page';

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.page.html',
	styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
	public clientes: Cliente[] = [
		{
			uid: 'da89s76da',
			nome: 'Teste1',
			cpf: '123456789',
			endereco: {
				cep: '123456789',
				logradouro: '55',
                bairro: 'bairro x',
				complemento: 'complemento x',
				cidade: 'cidade x',
			},
			email: 'teste@teste.com',
			nascimento: '10111995',
			image: 'https://images.generated.photos/SsG9InJf3rhzlESGbhhSaIGD9nijXsDCXMsagxY5X6Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzA5MjM5LmpwZw.jpg'
		},
		{
			uid: 'a9sf809ad',
			nome: 'Teste2',
			cpf: '123456789',
			endereco: {
				cep: '123456789',
				logradouro: '55',
                bairro: 'bairro x',
				complemento: 'complemento x',
				cidade: 'cidade 2',
			},
			email: 'teste@teste.com',
			nascimento: '10111995',
			image: 'https://images.generated.photos/tZdcuglcnvMqOCjvvB-OinNfLWafceg2JTRKdnUOin4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUwOTY1LmpwZw.jpg'
		}
	]

	constructor(
		private modalController: ModalController
	) { }

	ngOnInit() {
	}

	public openEditModal(cliente: Cliente) {
		return this.modalController.create({
			component: ClientePage,
			componentProps: {
                cliente: cliente
			}

		}).then(modal => modal.present());
	}

}

interface Cliente {
	uid: string
	nome: string
	cpf: string
	endereco: Endereco
	email: string
	nascimento: string //Ex: 10111995
	image: string
}

interface Endereco {
	cep: string
	logradouro: string
	bairro: string
	complemento: string
	cidade: string
}