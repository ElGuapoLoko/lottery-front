import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
    providers: [ConfirmationService, MessageService]
})
export class SupportComponent implements OnInit {

    title: string = '';
    message: string = '';
    blockTitle: boolean = false;
    blockMessage: boolean = false;
    blockSend: boolean = false;

    historiesSupport: any[] = [
        {
            title: 'Teste do top',
            message: 'Apenas um teste em'
        }
    ];

    constructor( private messageService: MessageService, private confirmationService: ConfirmationService ) {
    }

    ngOnInit(): void {
    }

    viewHistory(history): void {
        this.title = history.title;
        this.message = history.message;
        this.blockTitle = true;
        this.blockMessage = true;
        this.blockSend = true;
    }

    clear(): void {
        this.title = '';
        this.message = '';
        this.blockTitle = false;
        this.blockMessage = false;
        this.blockSend = false;
    }

    confirm() {
        this.confirmationService.confirm({
            key: 'confirm-delete',
            message: 'Deseja confirmar a exclusão desse suporte?',
            accept: () => {
                console.log('aceitou')
                this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
            },
            reject: () => {
                console.log('rejeitou')
                this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
            }
        });
    }

}
