import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    providers: [ConfirmationService, MessageService]
})
export class EventsComponent implements OnInit {

    eventsActive: any[] = [
        {
            title: 'Caça ao dofus Ocre',
            message: 'Quem pegar o dofus ocre antes do dia 30 ganha 1mk',
            start: '14/05/2022',
            end: '30/05/2022',
        }
    ];

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {
    }

    ngOnInit(): void {
    }


    confirm() {
        this.confirmationService.confirm({
            key: 'confirm-delete',
            message: 'Deseja confirmar a exclusão desse evento?',
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
