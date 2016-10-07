import fs from 'fastclick';
import firebase from 'firebase';
import Game from '@greenhousegames/game-template';
import '@greenhousegames/greenhouse-phaser-plugin';
import config from './config';

fs.FastClick.attach(document.body);

const firebaseInst = firebase.initializeApp(config);

const game = new Game({
  firebase: firebaseInst,
  assetPath: 'game'
});
game.state.start('boot');
