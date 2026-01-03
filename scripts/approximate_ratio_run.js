import { approximateRatio, SET_GEAR_TEETH } from "./approximate_ratio.js";

const ABSOLUTE_TO_MARS = 0.128052;
const MARS_TO_EARTH = 0.129358;
const EARTH_TO_VENUS = 0.198442;

console.log("Absolute to Mars - 3 factors");

console.log(
  approximateRatio(ABSOLUTE_TO_MARS, {
    values: SET_GEAR_TEETH,
    factorCount: 3,
    limit: 2,
    fixedDenominator: 60,
  })
);

console.log("Mars to Earth - 3 factors - only gears from the set");

console.log(
  approximateRatio(MARS_TO_EARTH, {
    values: SET_GEAR_TEETH,
    factorCount: 3,
    limit: 2,
    fixedDenominator: 60,
  })
);

console.log("Mars to Earth - 3 factors");

console.log(
  approximateRatio(MARS_TO_EARTH, {
    factorCount: 3,
    limit: 4,
    fixedDenominator: 60,
  })
);

console.log("Earth to Venus - 2 factors - 28 tooth turntable from the set");

console.log(
  approximateRatio(EARTH_TO_VENUS, {
    values: SET_GEAR_TEETH,
    factorCount: 2,
    limit: 3,
    fixedDenominator: 28,
  })
);

console.log("Earth to Venus - 1 factor - 60 tooth turntable");

console.log(
  approximateRatio(EARTH_TO_VENUS, {
    factorCount: 1,
    limit: 1,
    fixedDenominator: 60,
  })
);

console.log("Earth to Venus - 3 factors - 60 tooth turntable");

console.log(
  approximateRatio(EARTH_TO_VENUS, {
    factorCount: 3,
    limit: 1,
    fixedDenominator: 60,
  })
);
