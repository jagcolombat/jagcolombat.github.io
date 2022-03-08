import { TierEnum } from "../enums/tier";
import { TierMatchEnum } from "../enums/tier-match";

export interface IResultItem {
    tier?: TierEnum | string;
    match?: TierMatchEnum | string;
    winners?: number;
    amount?: number;
}

export class ResultItem implements IResultItem {
    constructor(public tier?: TierEnum | string, public match?: TierMatchEnum | string, 
        public winners?: number, public amount?: number ) {}
}
