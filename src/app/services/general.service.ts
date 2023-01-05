import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GeneralService {

	constructor(
		private datePipe: DatePipe,
	) { }

	/** 
	 * Gets the current date in string form or convert another date to same format.
	 * Data is returned in UTC
	 * @param otherDate Another date format that can be load by Date
	 * @returns string as `yyyyMMddHHmmss`
	 * @example '2021-09-07T15:35:38.603-03:00' -> `20210907153538`
	*/
	public getDateAsString(otherDate?: string): string {
		let now = new Date(); // Get current date
		if (otherDate) {
			now = new Date(otherDate);
		}
		let utcTime = now.toUTCString(); // Format the date without GMT time zones
		let dateAsString = this.datePipe.transform(utcTime, 'yyyyMMddHHmmss') as string;
		return dateAsString;
	}

	/**
	 * Get an unique uid
	 * @return An unique uid as string in the following format: `ab9jh37bc_20220106142930`
	*/
	public generateUniqueUid(): string {
		// Math.random should be unique because of its seeding algorithm.
		// Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
		return Math.random().toString(36).substring(2, 11) + '_' + this.getDateAsString();
	}

	/** 
	 * Convert date format as string to a more user friendly mode
	 * @param datestring as `yyyyMMddHHmmss`
	 * @return string as `dd/MM/yyyy HH:mm:ss`
	 * @example 20201012150000 -> 12/10/2020 15:00:00
	*/
	public stringToDate(datestring: string): string {
		let year = datestring.substring(0, 4),
			month = datestring.substring(4, 6),
			day = datestring.substring(6, 8),
			hour = datestring.substring(8, 10),
			minute = datestring.substring(10, 12),
			second = datestring.substring(12, 14);

		return day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
	}

	/**
	 * Sum all values of a property from an array of objects
	 * @returns The sum of all properties
	 */
	public sumOfProps(array: any[], prop: string): number {
		return array.reduce((a, b) => {
			return Number(a) + Number(b[prop]);
		}, 0);
	}
}
