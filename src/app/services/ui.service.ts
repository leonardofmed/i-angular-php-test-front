import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class UiService {

	constructor(		
		private toastController: ToastController,
	) { }

	private toast!: HTMLIonToastElement;	

	/** Create a toast */
	public presentToast(text: string, duration: number = 3000, position: 'bottom' | 'top' | 'middle' = 'bottom'): Promise<void> {
		// Remove any previous toast before creating a new one
		return this.dismissToast().then(() => {
			return this.toastController.create({
				message: text,
				position: position as 'bottom' | 'top' | 'middle',
				duration: duration,
				cssClass: 'toastController'
	
			}).then((toastX) => {
				this.toast = toastX;
				return this.toast.present();
			});
		});
	}
	
	/**
	 * Remove any previous toast on screen
	 * @param logError If the function should log an error if dismiss is not possible
	 */
	public dismissToast(logError:boolean = false): Promise<boolean> {
		if (!this.toast) return new Promise(resolve => resolve(false));
		try {
			return this.toast.dismiss();
		} catch(e) {
			if (logError) console.log(e);
			return new Promise(resolve => resolve(false));
		}
	}
}
