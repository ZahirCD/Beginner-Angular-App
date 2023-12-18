import { Component , OnInit , EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); // instantiate with () | @Output makes it listenable from outside component
  interval;
  lastNumber = 0;

constructor () {}

ngOnInit(){

}

onStartGame(){
  this.interval = setInterval (() => {
    this.intervalFired.emit(this.lastNumber + 1);
    this.lastNumber++;
  }, 1000);
}

onPauseGame(){
  clearInterval(this.interval);
}

}