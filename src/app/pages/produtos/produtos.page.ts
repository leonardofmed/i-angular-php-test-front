import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ProdutoPage } from 'src/app/modals/produto/produto.page';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.page.html',
	styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
	public products: Produto[] = [
		{
			uid: "7890a7f980asd",
			nome: "Herbal Mock",
			valor: "1299",
			image: "https://img.freepik.com/free-psd/skincare-bottle-mockup-psd-beauty-product-packaging_53876-115105.jpg?auto=format&h=200"
		},
		{
			uid: "9ad80asda9",
			nome: "SkinCare Mock",
			valor: "699",
			image: "https://img.freepik.com/premium-psd/beauty-care-cosmetic-product-mock-up_23-2148891564.jpg?auto=format&h=200"
		}
	]

	constructor(
		private modalController: ModalController,
		private navController: NavController
	) { }

	ngOnInit() {
	}

	public openEditModal(product: Produto) {
		return this.modalController.create({
			component: ProdutoPage,
			componentProps: {
                product: product
			}

		}).then(modal => modal.present());
	}

	/**
	 * Formata valor para ser exibido ao usuário
	 * @param value O valor no formato string, sem vírgula para os centavos.
	 * @example "1299" -> "R$ 12,99" 
	 */
	public moneyMask(value: string): string {
		value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
	  
		const options = { minimumFractionDigits: 2 }
		const result = new Intl.NumberFormat('pt-BR', options).format(
			parseFloat(value) / 100
		);
	  
		return 'R$ ' + result
	}

	// TODO
	public buy(product: Produto) {

	}

	public add() {
		return this.modalController.create({
			component: ProdutoPage,
			componentProps: {
                product: null
			}

		}).then(modal => modal.present());
	}

	public goBack(): void {
		return this.navController.back();
	}

}

export interface Produto {
	uid: string
	nome: string
	valor: string
	image: string
}
