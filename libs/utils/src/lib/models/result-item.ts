import { TierEnum } from "../enums/tier";
import { TierMatchEnum } from "../enums/tier-match";

export interface IResultItem {
    tier?: TierEnum | string;
    match?: TierMatchEnum | string;
    winners?: number | string;
    amount?: number;
}

export class ResultItem implements IResultItem {
    constructor(public tier?: TierEnum | string, public match?: TierMatchEnum | string, 
        public winners?: number| string, public amount?: number ) {}
}
