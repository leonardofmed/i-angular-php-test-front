import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produto } from 'src/app/pages/produtos/produtos.page';
import { GeneralService } from 'src/app/services/general.service';

@Component({
	selector: 'app-produto',
	templateUrl: './produto.page.html',
	styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
	@Input() product: Produto;
	private newProduct: boolean = false;

	constructor(
		private modalController: ModalController,
		private general: GeneralService
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
		if (!this.product) {
			this.newProduct = true;
			this.product = {
				uid: this.general.generateUniqueUid(),
				nome: '',
				valor: '',
				image: '',
			}
		}
	}

	public save(): Promise<boolean> {
		// TODO IF NEW PRODUCT THEN ADD, ELSE UPDATE
		return this.modalController.dismiss();
	}

	public remove(): Promise<boolean> {
		return this.modalController.dismiss();
	}
}