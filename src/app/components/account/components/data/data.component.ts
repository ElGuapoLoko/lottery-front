import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

    @Input() form;

  constructor() { }

  ngOnInit(): void {
  }

}
