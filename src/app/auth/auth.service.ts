import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {}

  /**
   * Registration on firebase
   */
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  /**
   * Login on firebase
   */
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken().then(
            (token: string) => {
              this.token = token;
            }
          );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  /**
   * Fetching token from firebase
   */
  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.token = token;
      }
    );
    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
