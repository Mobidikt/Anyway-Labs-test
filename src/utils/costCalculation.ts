import { COST_PER_HOUR } from './constants';

export function costCalculation(time: number) {
    const costMin = COST_PER_HOUR/60
    const costSec = COST_PER_HOUR/3600
    const hour = (Math.floor(time/3600000));
    const min = (Math.floor(time/60000))%60;
    const sec = (Math.floor(time/1000))%60; 
    return Math.round((hour*COST_PER_HOUR+costMin*min + costSec*sec)*100)/100
}