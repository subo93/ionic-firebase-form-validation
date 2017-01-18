import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class FirebaseData {

  constructor() { }

  saveSong(songName: string, artistName: string, userAge: number): any {
    const songRef = firebase.database().ref('songs');
    return songRef.push({songName, artistName, userAge});
  }

}
