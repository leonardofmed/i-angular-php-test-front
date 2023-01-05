import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/pages/produtos/produtos.page';
import { ApiService } from 'src/app/services/api.service';
import { GeneralService } from 'src/app/services/general.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
	selector: 'app-produto',
	templateUrl: './produto.page.html',
	styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
	@Input() product!: Produto;
	public newProduct: boolean = false;

	constructor(
		private modalController: ModalController,
		private general: GeneralService,
		private api: ApiService,
		private ui: UiService
	) { }

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

	public save(): Subscription {
		return this.api.upsertProduct(this.product).subscribe((response: { status: boolean, message: string }) => {
			this.ui.presentToast(response.message);
			return this.modalController.dismiss("reload");
		});
	}

	public remove() {
		return this.api.removeProduct(this.product).subscribe((response: { status: boolean, message: string }) => {
			this.ui.presentToast(response.message);
			return this.modalController.dismiss("reload");
		});
	}
}