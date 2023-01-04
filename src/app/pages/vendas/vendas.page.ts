import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produtos.page';
import { Cliente } from '../clientes/clientes.page';
import { GeneralService } from 'src/app/services/general.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-vendas',
	templateUrl: './vendas.page.html',
	styleUrls: ['./vendas.page.scss'],
})
export class VendasPage implements OnInit {
	public vendas: Venda[] = [];

	constructor(
		private general: GeneralService,
		private api: ApiService
	) { }

	ngOnInit() {
		this.getSales();
	}

	public formatDate(date: string): string {
		return this.general.stringToDate(date);
	}

	public getSales() {
		return this.api.getSales().subscribe((sales: Venda[]) => {
			console.log("sales", sales); // TODO REMOVE
			this.vendas = sales;
		});
	}
}

/**
 * @param user Here we use the full User interface/obj, in DB we sabe only the user UID related to this sale.
 * @param products: Same case of user. Here we use the full array of products, in DB we can save only the array of UIDs.
 */
export interface Venda {
	uid: string
	data: string
	user: Cliente // Here we use 
	products: Produto[] // TODO this should be an array of products UIDs
	total: string
}