import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AgeValidator } from '../../validators/age';
import { FirebaseData } from '../../providers/firebase-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public addSongForm: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public firebaseData: FirebaseData) {
    
    this.addSongForm = formBuilder.group({
      songName: ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
      artistName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      userAge: ['', Validators.compose([Validators.required, AgeValidator.isValid])]
    });
    
  }

  addSong(){
    if (!this.addSongForm.valid){
      console.log("Nice try!");
    } else {
      this.firebaseData.saveSong(this.addSongForm.value.songName, this.addSongForm.value.artistName, 
      this.addSongForm.value.userAge)
        .then( () => {
          this.addSongForm.reset();
        });
    }
    
  }

}
