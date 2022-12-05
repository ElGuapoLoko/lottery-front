import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

    eventsHistory: any[] = [
        {
            title: 'Caça ao dofus Ocre',
            message: 'Quem pegar o dofus ocre antes do dia 30 ganha 1mk',
            start:'14/05/2022',
            end:'30/05/2022',
        }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
