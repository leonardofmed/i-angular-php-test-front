import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ProdutoPage } from 'src/app/modals/produto/produto.page';
import { ApiService } from 'src/app/services/api.service';
import { Venda } from '../vendas/vendas.page';
import { GeneralService } from 'src/app/services/general.service';
import { Cliente } from '../clientes/clientes.page';
import { UiService } from 'src/app/services/ui.service';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.page.html',
	styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
	public products: Produto[] = [];

	constructor(
		private modalController: ModalController,
		private navController: NavController,
		private api: ApiService,
		private general: GeneralService,
		private ui: UiService
	) { }

	ngOnInit() {
		this.getProducts();
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


	/**
	 * Create a sale
	 */
	// TODO Create a cart page and an "add to cart" funtion instead of creating a sale directly
	public buy(product: Produto) {
		// Get "logged" user (here I'm just using a presetted one)
		let mockUser: Cliente = {
			uid: 'mock_123',
			nome: 'Mock Logged User',
			cpf: '123456789',
			endereco: {
				cep: "123345",
				logradouro: "Rua X",
				bairro: "Bairro Y",
				complemento: "AP Z",
				cidade: "Cidade Sul",
				numero: 123
			},
			email: 'logged_user@mock.com',
			nascimento: '04/01/2023',
			image: 'https://images.generated.photos/qksjjOZvLyT36WSEqf4iVuwTBUqpJv6Cjx2rIgnZOuI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjg5ODQ2LmpwZw.jpg'
		}

		let newSale: Venda = {
			uid: this.general.generateUniqueUid(),
			data: this.general.getDateAsString(),
			user: mockUser,
			products: [product],
			total: "product"
		}
		// Calculate the total amount from products in sale
		newSale.total = this.general.sumOfProps(newSale.products, "valor").toString();

		// Send sale order to API
		return this.api.addSale(newSale).subscribe((response: { status: boolean, message: string }) => {
			this.ui.presentToast(response.message);
		});
	}

	public add(): Promise<void> {
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

	public getProducts() {
		return this.api.getProducts().subscribe((products: Produto[]) => {
			console.log("products", products); // TODO REMOVE
			this.products = products;
		});
	}
}

export interface Produto {
	uid: string
	nome: string
	valor: string
	image: string
}