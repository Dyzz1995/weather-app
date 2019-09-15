import { Temperature } from './temperature.model';
import { SunLight } from './sunlight.model';

export class Weather{
    code: number;
    cityName: string;
    text: string;
    temperature: Temperature;
    sunLight: SunLight;
}