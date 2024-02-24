import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-skater',
    templateUrl: './skater.component.html'
})
export class SkaterComponent implements OnInit {

    params: any
    data: any;

    public patineur : any;
    public compes : any;

    constructor(private route: ActivatedRoute, headerService: HeaderService, dataService: DataService) {
        this.route.params.subscribe(params => {
            this.params = params;

            this.patineur = dataService.getPatineurs().find( (patineur: any)  => patineur.numero == params['skater']);
            headerService.updateHeader([
                { name: "Accueil", path: "/" },
                { name: this.patineur.nom + ', ' + this.patineur.prenom }
            ]);
            this.compes = dataService.getCompes().filter( (c: any) => c.patvagues.find((pv: any) => pv.numero_pat == params['skater']));
            this.compes = this.compes.sort((a: any, b: any) => b.date > a.date ? 1 : -1);
        });
    }

    ngOnInit(): void { }

    public getPatVagues(compe: any) {
        let r = compe.patvagues.filter( (pv: any) => pv.numero_pat == this.patineur.numero);
        r = r.sort((a: any, b: any) => a.numero_vague.substring(0, a.numero_vague.length - 1) - b.numero_vague.substring(0, b.numero_vague.length - 1));
        r.forEach( (pv: any) => {
            pv['vague'] = compe.vagues.find( (v: any) => v.numero == pv.numero_vague );
        });
        return r;
    }


}
