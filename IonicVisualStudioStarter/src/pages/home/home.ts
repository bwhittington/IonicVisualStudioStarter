import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private navCtrl: NavController;

    constructor(navCtrl: NavController, navParams: NavParams) {
        this.navCtrl = navCtrl;
    }

    public onLink(url: string): void {
        window.open(url);
    }
}