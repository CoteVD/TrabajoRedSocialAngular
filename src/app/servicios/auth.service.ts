import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import 'rxjs/operators';
import 'rxjs/add/operator/map'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public firebaseAuth:AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email:string, password:string){
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email:string, password:string){
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.firebaseAuth.auth.signOut()
  }

  getAuth(){
    return this.firebaseAuth.authState.map(auth =>auth);
  }
}