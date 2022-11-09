import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = "videoplayer-current-time"; 


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay (time) {
localStorage.setItem(LOCAL_KEY, time.seconds);
};

player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);