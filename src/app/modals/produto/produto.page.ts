import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produto } from 'src/app/pages/produtos/produtos.page';

@Component({
	selector: 'app-produto',
	templateUrl: './produto.page.html',
	styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
	@Input() product: Produto;

	constructor(
		private modalController: ModalController
	) {
		// Mock product structure to prevent initializer compiler error
		this.product = {
			uid: '',
			nome: '',
			valor: '',
			image: '',
		}
	}

	ngOnInit() {
	}

	public save(): Promise<boolean> {
		return this.modalController.dismiss();
	}
}