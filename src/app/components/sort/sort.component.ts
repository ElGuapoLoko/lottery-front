import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

    players: any[] = [
        {
            id: 1,
            name: 'Henrique',
            nick: 'ElGuapoLoko1',
        },
        {
            id: 2,
            name: 'Henrique',
            nick: 'ElGuapoLoko2',
        },
        {
            id: 3,
            name: 'Henrique',
            nick: 'ElGuapoLoko3',
        },
        {
            id: 4,
            name: 'Henrique',
            nick: 'ElGuapoLoko4',
        },
        {
            id: 5,
            name: 'Henrique',
            nick: 'ElGuapoLoko5',
        },
        {
            id: 6,
            name: 'Henrique',
            nick: 'ElGuapoLoko6',
        },
        {
            id: 7,
            name: 'Henrique',
            nick: 'ElGuapoLoko7',
        },
        {
            id: 8,
            name: 'Henrique',
            nick: 'ElGuapoLoko8',
        },
        {
            id: 9,
            name: 'Henrique',
            nick: 'ElGuapoLoko9',
        },
        {
            id: 10,
            name: 'Henrique',
            nick: 'ElGuapoLoko10',
        },
    ];

    time: number = 50;
    inProgress: boolean = false;
    counter: number = 0;
    winner: any = null;
    nick: string = 'Iniciar -->';
    length: number = 0;

    constructor() {
    }

    ngOnInit(): void {

    }

    bigWinStart(): void {
        this.inProgress = true;
        this.counter = 0;
        this.time = 50
        this.length = (this.players.length - 1);

        const interval = setInterval((e) => {
            this.time--;
            if (this.time == 0) {
                this.showWinner();
                clearInterval(interval);
            } else {
                if (this.counter == this.length) {
                    this.counter = 0;
                    this.nick = this.players[this.counter].nick;
                } else {
                    if (this.counter < this.length && this.inProgress) {
                        this.counter += 1;
                        this.nick = this.players[this.counter].nick;
                    }
                }
            }
        }, 200);
    }

    showWinner(): void {
        this.inProgress = false;
        this.nick = 'Ganhador'
        console.log('showWinner')

    }

}
