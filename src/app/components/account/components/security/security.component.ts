import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Password} from "primeng/password";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

    @ViewChild('Password', {static: false}) passwordComponent: Password;
    @ViewChild('ConfirmPassword', {static: false}) ConfirmpasswordComponent: Password;

    @Input() form;

    ngAfterViewInit(): void {
        this.passwordComponent['cd'].detectChanges();
        this.ConfirmpasswordComponent['cd'].detectChanges();
    }


    constructor() { }

  ngOnInit(): void {
  }

}
