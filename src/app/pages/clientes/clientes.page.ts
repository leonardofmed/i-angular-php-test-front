import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ClientePage } from 'src/app/modals/cliente/cliente.page';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.page.html',
	styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
	public clientes: Cliente[] = []

	constructor(
		private modalController: ModalController,
		private navController: NavController,
		private api: ApiService
	) { }

	ngOnInit() {
		this.getClients();
	}

	//ionViewWillEnter() {}

	public openEditModal(cliente: Cliente): Promise<void> {
		return this.modalController.create({
			component: ClientePage,
			componentProps: {
				cliente: cliente
			}

		}).then(modal => {			
			modal.onDidDismiss().then(data => {
				if (data.data === 'reload') this.getClients();
			});
			modal.present()
		});
	}

	public add(): Promise<void> {
		return this.modalController.create({
			component: ClientePage,
			componentProps: {
				cliente: null
			}

		}).then(modal => modal.present());
	}

	public goBack(): void {
		return this.navController.back();
	}

	private getClients() {
		return this.api.getClients().subscribe((clients: Cliente[]) => {
			console.log("clients", clients); // TODO REMOVE
			this.clientes = clients;
		});
	}

}

export interface Cliente {
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
	numero: number
}