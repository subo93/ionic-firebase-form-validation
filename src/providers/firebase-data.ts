import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class FirebaseData {

  constructor() { }

  saveSong(songName: string, artistName: string, userAge: number): any {
    return firebase.database().ref('songs').push({ songName, artistName, userAge });
  }

}
