import { Component , OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent implements OnInit{
  @Input() number: number;


  constructor(){}

  ngOnInit() {
    
  }




}
