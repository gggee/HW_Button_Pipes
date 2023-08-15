import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'DISCOUNT CARD'
  sum = 150000
  perc = 0.20
  card_status= 'active'

  sum_empty= 'accumulated amount is 0...'
  perc_empty = 0
  card_status_empty= 'inactive'
}
