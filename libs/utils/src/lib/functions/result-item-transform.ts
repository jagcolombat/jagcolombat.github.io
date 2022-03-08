import { ETier, ETierMatch } from "../enums";
import { ResultItem } from "../models";

export function getResultItem(result: any) {
    console.log('getResultItem', result);
    const tier: string= result[0];

    const tierEntry = Object.entries(ETier).find(v => v[0] === tier );
    const labelTier = tierEntry ? tierEntry[1]: "";

    const matchEntry = Object.entries(ETierMatch).find(v => v[0] === tier );
    const labelMatch = matchEntry ? matchEntry[1]: "";

    const winners = result && tier ? <number>(result[1]['winners']): 0;
    const prize = result && tier ? <number>(result[1]['prize']): 0;

    return new ResultItem(labelTier, labelMatch, winners,  prize) ;
}