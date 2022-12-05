import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {AccountService} from "./services/account.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    loading: boolean = false;
    form: FormGroup;

    constructor(private accountService: AccountService,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.show();
        this.buildForm(null);
    }


    show(): void {
        this.loading = true;

        this.accountService.show().subscribe((response) => {
            this.loading = false;
            this.buildForm(response);
        })
    }

    buildForm(data): void {
        if (data) {
            this.form = this.fb.group({
                id: [data.id],
                name: [data.name],
                surname: [data.surname],
                email: [data.email],
                password: [data.password],
                nick: [data.nick],
                twitch: [data.twitch],
                youtube: [data.youtube],
                instagram: [data.instagram],
                phone: [data.phone],
                validated_email: [data.validated_email],
            });
        } else {
            this.form = this.fb.group({
                id: [null],
                name: [''],
                surname: [''],
                email: [''],
                password: [''],
                nick: [''],
                twitch: [''],
                youtube: [''],
                instagram: [''],
                phone: [''],
                validated_email: [false],
            });
        }
    }


}
