import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  userName: string;
  tag: string;
  constructor(public router: Router) {}

  ngOnInit() {
    // With Routing in Ionic, The OnInit lifecycle hook
    // may not get called consistently.
    console.log('LoginPage - OnInit');
  }

  ngOnDestroy() {
    // Likewise, this will may not consistently fire when you navigate away
    // from the component
    console.log('LoginPage - OnDestroy');
  }

  // However, Ionic provides lifecycle hooks of its own that
  // will fire consistently during route navigation

  ionViewWillEnter() {
    // This method will be called every time the component is navigated to
    // On initialization, both ngOnInit and this method will be called

    console.log('LoginPage - ViewWillEnter');
  }

  ionViewWillLeave() {
    // This method will be called every time the component is navigated away from
    // It would be a good method to call cleanup code such as unsubscribing from observables

    console.log('LoginPage - ViewWillLeave');
  }
}
