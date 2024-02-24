import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

    constructor(private router: Router, private headerService: HeaderService) { }

    ngOnInit(): void {
    }

    public getHeaderLinks(): any[] {
        return this.headerService.getLinks();
    }

    public changeLocation(location: string): void {
        this.router.navigate([location]);
    }

}
