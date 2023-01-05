import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { Cliente } from '../pages/clientes/clientes.page';
import { Produto } from '../pages/produtos/produtos.page';
import { Venda } from '../pages/vendas/vendas.page';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	// Http options to force no cache use
	private options = {
		headers: new HttpHeaders({
			'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
			'Pragma': 'no-cache',
			'Expires': '0'
		})
	}

	constructor(
		private http: HttpClient,
		private storage: StorageService
	) {}

	private apiLocation: string = 'http://wktest.epizy.com/api/';

	/** Clients */
	public getClients(clientUid?: string): Observable<any> {
		let url: string = clientUid ? this.apiLocation + 'clients/' + clientUid : this.apiLocation + 'clients';
		return this.http.get(url, this.options);
	}

	public upsertClient(client: Cliente): Observable<any> {
		let url: string = this.apiLocation + 'clients';
		return this.http.post(url, JSON.stringify(client));
	}

	public removeClient(client: Cliente): Observable<any> {
		let url: string = this.apiLocation + 'clients/' + client.uid;
		return this.http.delete(url);
	}

	/** Products */
	public getProducts(productUid?: string): Observable<any> {
		let url: string = productUid ? this.apiLocation + 'products/' + productUid : this.apiLocation + 'products';
		return this.http.get(url, this.options);
	}

	public upsertProduct(product: Produto): Observable<any> {
		let url: string = this.apiLocation + 'products';
		return this.http.post(url, JSON.stringify(product));
	}

	public removeProduct(product: Produto): Observable<any> {
		let url: string = this.apiLocation + 'products';
		return this.http.delete(url, {body: JSON.stringify(product)});
	}

	/** Sales */
	public addSale(sale: Venda): Observable<any> {
		return this.http.post(this.apiLocation + 'sales', JSON.stringify(sale));
	}

	public getSales(): Observable<any> {
		return this.http.get(this.apiLocation + 'sales', this.options);
	}
}