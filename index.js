// validateSpaCapeTown.js
import { getSpa, calcSpa } from './path/to/nrel-spa/index.js';

const date = new Date('2024-04-26T12:00:00Z');

console.log('Current Date (UTC):', date);

// Cape Town parameters
const city = 'Cape Town';
const lat = -33.9249;
const lng = 18.4241;
const tz = 2; // Cape Town timezone (UTC+2)
const elevation = 25; // meters
const temperature = 20; // °C
const pressure = 1015; // millibars
const params = { elevation, temperature, pressure };
const angles = [];

const get = getSpa(date, lat, lng);
const calc = calcSpa(date, lat, lng, tz, params, angles);

console.log(`\nTest: ${city} on 26 April 2024 at 12:00 UTC:\n`);
console.log('getSpa =', get, '\n');
console.log('calcSpa =', calc, '\n');
