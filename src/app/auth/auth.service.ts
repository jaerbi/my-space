import * as firebase from 'firebase';

export class AuthService {

  token: string;

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
