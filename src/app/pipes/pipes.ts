import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'penalityFormatter' })
export class PenalityFormatterPipe implements PipeTransform {
    transform(value: string) {
        return value.replace('.', '');
    }
}

@Pipe({ name: 'pointsFormatter' })
export class PointsFormatterPipe implements PipeTransform {
    transform(value: string) {
        if(value == "0.0") {
            return "";
        } else {
            return value.replace('.0', '');
        }
    }
}

@Pipe({ name: 'timeFormatter' })
export class TimeFormatterPipe implements PipeTransform {
    transform(value: string) {
        if(value == "0.0") {
            return "";
        } else {
            let formatted: string = Number(value).toFixed(5);
            formatted = formatted.replace('.', ':');
            let index = formatted.indexOf(':') + 3
            formatted = formatted.substring(0, index) + "," + formatted.substring(index);
            return formatted;
        }
    }
}