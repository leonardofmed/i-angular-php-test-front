import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produtos.page';
import { Cliente } from '../clientes/clientes.page';
import { GeneralService } from 'src/app/services/general.service';

@Component({
	selector: 'app-vendas',
	templateUrl: './vendas.page.html',
	styleUrls: ['./vendas.page.scss'],
})
export class VendasPage implements OnInit {
	public vendas: Venda[] = [
		{
			uid: "as8d90a8sd0-9as",
			data: "20230101100005",
			user: {
				uid: 'a9sf809ad',
				nome: 'Teste2',
				cpf: '123456789',
				endereco: {
					cep: '123456789',
					logradouro: '55',
					bairro: 'bairro x',
					complemento: 'complemento x',
					cidade: 'cidade 2',
					numero: 156
				},
				email: 'teste@teste.com',
				nascimento: '10111995',
				image: 'https://images.generated.photos/tZdcuglcnvMqOCjvvB-OinNfLWafceg2JTRKdnUOin4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUwOTY1LmpwZw.jpg'
			},
			products: [
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
			],
			total: "1299"
		}
	];

	constructor(
		private general: GeneralService
	) { }

	ngOnInit() {
	}

	public formatDate(date: string): string {
		return this.general.stringToDate(date);
	}

}

export interface Venda {
	uid: string
	data: string
	user: Cliente
	products: Produto[]
	total: string
}