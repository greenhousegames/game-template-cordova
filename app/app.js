import fs from 'fastclick';
import firebase from 'firebase';
import Game from '@greenhousegames/game-template';
import '@greenhousegames/firebase-game-storage';
import '@greenhousegames/greenhouse-phaser-plugin';

fs.FastClick.attach(document.body);

const firebaseInst = firebase.initializeApp({
  apiKey: 'AIzaSyCqcbh9XmZZBahTDxmj4GXbwQny9H9wHdo',
  authDomain: 'greenhouse-games-test.firebaseapp.com',
  databaseURL: 'https://greenhouse-games-test.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '756331628096'
});

const game = new Game({
  firebase: firebaseInst,
  assetPath: 'game'
});
game.state.start('boot');
