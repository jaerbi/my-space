import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAUrZUbdG6vADAZ-r6d66DXXRrbFMDHHj4',
      authDomain: 'my-space-jaerbi.firebaseapp.com'
    });
  }
}
