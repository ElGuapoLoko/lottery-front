import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {AddUserComponent} from "./components/add-user/add-user.component";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [DialogService]
})
export class UsersComponent implements OnInit {

    constructor( public dialogService: DialogService) {
    }

    ngOnInit(): void {
    }

    addUser(): void {
        const dialog = this.dialogService.open(AddUserComponent, {
            header: 'Adicionar usuário',
            width: '50%',
            styleClass: 'responsive-dialog'
        });
    }

    editUser(): void {
        const dialog = this.dialogService.open(AddUserComponent, {
            header: 'Editar usuário',
            width: '50%',
            styleClass: 'responsive-dialog'
        });
    }

}
