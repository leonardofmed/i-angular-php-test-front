import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

	constructor(
		private navController: NavController
	) { }

	ngOnInit() {
	}

	goTo(dest: "produtos" | "vendas" | "clientes"): Promise<boolean> {
		return this.navController.navigateForward(dest);
	}

}
