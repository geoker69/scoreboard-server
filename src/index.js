const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const Stopwatch = require('timer-stopwatch');
const Game = require('./game');
const formatClock = require('./utilities');

const app = express();
const server = http.createServer(app); 
const io = socketio(server);

const port = process.env.PORT || 3000;
let game = new Game('Glen Waverley Rovers','Visiting Team');

let timerOptions = {
  refreshRateMS: 1000		// How often the clock should be updated - 1 second
};

let timer = new Stopwatch(1200000, timerOptions);

io.on('connection', (socket) => {
  
  let score = game.getScores();
  socket.emit('scoreUpdated', score);

  timer.onTime( (time) => {
    let remainingSeconds = Math.trunc(time.ms /1000);
    let clock = formatClock(remainingSeconds);
    socket.emit('timerUpdated', clock);
  });

  socket.on('homeGoalAdd', () => {
    console.log('Adding a goal for the home team');
    let score = game.updateGoals(1,0);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('homeGoalSubtract', () => {
    console.log('Subtracting a goal for the home team');
    let score = game.updateGoals(-1,0);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('awayGoalAdd', () => {
    console.log('Adding a goal for the away team');
    let score = game.updateGoals(1,1);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('awayGoalSubtract', () => {
    console.log('Subtracting a goal for the away team');
    let score = game.updateGoals(-1,1);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('homeBehindAdd', () => {
    console.log('Adding a behind for the home team');
    let score = game.updateBehinds(1,0);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('homeBehindSubtract', () => {
    console.log('Subtracting a behind for the home team');
    let score = game.updateBehinds(-1,0);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('awayBehindAdd', () => {
    console.log('Adding a behind for the away team');
    let score = game.updateBehinds(1,1);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('awayBehindSubtract', () => {
    console.log('Subtracting a behind for the away team');
    let score = game.updateBehinds(-1,1);
    io.emit('scoreUpdated', score);
  });
    
  socket.on('homeTeamNameChange', () => {
    console.log('Updating the home team name');
    let score = game.updateTeamName('New Name',0);
    io.emit('scoreUpdated', score);
  });

  socket.on('startTimer', () => {
    console.log('Timer Started');
    timer.start();
  });

  socket.on('pauseTimer', () => {
    console.log('Timer Stopped');
    timer.stop();
  });
  
  socket.on('resetTimer', () => {
    console.log('Timer Reset to 20 minutes');
    timer.stop();
    timer.reset(1200000);
  });
  
  socket.on('resetScore', () => {
    console.log('Score reset');
    let score = game.resetScores();
    io.emit('scoreUpdated', score);
  });

});

server.listen(port, () => {
  console.log(`App started on port ${port}`);
});