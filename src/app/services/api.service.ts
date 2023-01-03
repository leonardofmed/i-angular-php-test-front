import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { Cliente } from '../pages/clientes/clientes.page';

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

	public upsertClient(client: Cliente): Observable<Object> {
		let url: string = this.apiLocation + 'clients';
		return this.http.post(url, JSON.stringify(client));
	}

	public removeClient(client: Cliente): Observable<Object> {
		let url: string = this.apiLocation + 'clients';
		return this.http.delete(url, {body: JSON.stringify(client)});
	}

	/** Products */
	/** Sales */
}
