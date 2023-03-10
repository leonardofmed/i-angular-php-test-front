import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/pages/clientes/clientes.page';
import { ApiService } from 'src/app/services/api.service';
import { GeneralService } from 'src/app/services/general.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
	selector: 'app-cliente',
	templateUrl: './cliente.page.html',
	styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
	@Input() cliente!: Cliente;
	public newClient: boolean = false;

	constructor(
		private modalController: ModalController,
		private general: GeneralService,
		private api: ApiService,
		private ui: UiService
	) { }

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

	public save(): Subscription {
		return this.api.upsertClient(this.cliente).subscribe((response: { status: boolean, message: string }) => {
			this.ui.presentToast(response.message);
			return this.modalController.dismiss("reload");
		});
	}

	public remove() {
		return this.api.removeClient(this.cliente).subscribe((response: { status: boolean, message: string }) => {			
			this.ui.presentToast(response.message);
			return this.modalController.dismiss("reload");
		});
	}

}