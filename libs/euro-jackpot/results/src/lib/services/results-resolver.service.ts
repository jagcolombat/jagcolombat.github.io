import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EurojackpotDataAccessService } from "@lottoland/euro-jackpot/data-access";
import { Observable } from "rxjs";

@Injectable()
export class ResultsResolver implements Resolve<any> {

    constructor(private euroDataServ: EurojackpotDataAccessService) {
    }

    resolve(): Observable<any> | Promise<any> | any {
        // return this.euroDataServ.getResults();
        return this.euroDataServ.requestResults();
    }

}