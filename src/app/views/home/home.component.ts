import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderService } from 'src/app/services/header.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public patineurs : any[];

    constructor(headerService: HeaderService, dataService: DataService) {
        headerService.updateHeader([]);

        this.patineurs = dataService.getPatineurs();
        this.patineurs = this.patineurs.sort((a, b) => a.nom > b.nom ? 1 : -1);
    }

    ngOnInit(): void { }

}
