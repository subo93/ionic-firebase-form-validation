import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

  constructor() { }

  saveSong(songName: string, artistName: string, userAge: number): any {
    return firebase.database().ref('songs').push({ songName, artistName, userAge });
  }

}
