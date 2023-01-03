import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	public PAGARME_CUSTOMER_ID: string = 'pagarme_customer_id';
	public GAYA_CUSTOMER: string = 'gaya_customer';
	public ADDRESSES: string = "addresses";
	public CART: string = "Cart";
	public USER_UID: string = "userId";

	constructor(
		private storage: Storage
	) { }

	/** Start storage with app. Called in app.components.ts */
	init(): Promise<Storage> {
		return this.storage.create().then(storage => {
			return this.storage = storage
		});
	}

	/**
	 * Insert an object data in a storage key
	 * @param key The storage key
	 * @param data The data object
	 * @returns A string of the current state of storage key after insert the new obj
	*/
	insert(key: string, data: any): Promise<string> {
		return this.storage.get(key).then(result => {
			result = JSON.parse(result);
			let info: any[] = [];
			if (result) {
				info = result;
				info.push(data)
				let infoAsString: string = JSON.stringify(info);
				return this.storage.set(key, infoAsString);

			} else {
				info.push(data);
				let infoAsString: string = JSON.stringify(info);
				return this.storage.set(key, infoAsString);
			}
		});
	}

	/**
	 * Remove objects containing a specific property value inside the array of objs
	 * @param key The storage key
	 * @param prop_value The value of object prop
	 * @param prop The prop key
	 * @returns void
	*/
	deleteData(key: string, prop_value: number | string, prop: string): Promise<void> {
		return this.storage.get(key).then(result => {
			let newData: any[] = [];
			newData = JSON.parse(result)
			newData.forEach(info => {
				if (info[prop] === prop_value) {
					newData.splice(newData.indexOf(info), 1)
				}
			});
			let newDataAsString: string = JSON.stringify(newData);
			return this.storage.set(key, newDataAsString);
		});
	}

	/**
	 * Remove objects containing a specific property value inside the array of objs
	 * @param key The storage key
	 * @returns void
	*/
	deleteKey(key: string): Promise<void> {
		return this.storage.remove(key);
	}

	/**
	 * Update objects containing a specific property value inside the array of objs
	 * @param key The storage key
	 * @param prop_value The value of object prop
	 * @param prop The prop key
	 * @param value The new value
	 * @returns void
	*/
	updateData(key: string, prop_value: number | string, prop: string, value: any): Promise<void> {
		return this.storage.get(key).then(result => {
			let newData: any[] = [];
			newData = JSON.parse(result)
			newData.forEach(info => {
				if (info[prop] === prop_value) {
					info = value
				}
			});
			let newDataAsString: string = JSON.stringify(newData);
			return this.storage.set(key, newDataAsString);
		});
	}

	/**
	 * Get a specific object inside the storage array
	 * @param key The storage key
	 * @param id The object ID to be fetched
	 * @param prop_id The prop of object ID, default `'id'`
	 * @returns The whole Object. Can be of any type
	*/
	getSingleItem(key: string, id: number | string, prop_id: string = 'id'): Promise<any> {
		return this.storage.get(key).then(result => {
			let data = JSON.parse(result);
			if (data !== null) {
				data = data.find((obj: any) => {
					return obj[prop_id] == id;
				});
				return data;
			} else {
				return;
			}
		});
	}

	/**
	 * Get a simple data inside the storage
	 * @param key The storage key
	 * @param object If the data to be returned is of type object
	 * @returns The whole Object. Can be of any type
	*/
	getSimpleItem(key: string, object: boolean = false): Promise<any> {
		return !object ? this.storage.get(key) : this.storage.get(key).then(data => JSON.parse(data));
	}

	setSimpleItem(key: string, data: any, object: boolean = false): Promise<any> {
		return !object ? this.storage.set(key, data) : this.storage.set(key, JSON.stringify(data));
	}

	/**
	 * Return all data related to a storage key
	 * @param key The storage key
	 * @returns An array of parsed objects, can be of any type
	*/
	getAll(key: string): Promise<any> {
		return this.storage.get(key).then(data => {
			return JSON.parse(data);
		});
	}

	/**
	 * !! Warning !!
	 * Remove all data from storage. Used only for tests or logout.
	 * @returns void
	*/
	clearStorage(): Promise<void> {
		return this.storage.clear().then(() => {
			console.log('Storage clear');
		});
	}

	/**
	 * Update all object data inside a storage key 
	 * @param key The storage key
	 * @param data The whole array of objects to be overwriten
	 * @returns A string of the current state of storage key after the overwrite
	*/
	overwriteValues(key: string, data: any): Promise<string> {
		return this.storage.set(key, JSON.stringify(data));
	}

}
