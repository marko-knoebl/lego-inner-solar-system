// This file was generated with the help of AI

export const GEAR_TEETH = [8, 12, 16, 20, 24, 28, 36, 40];
export const SET_GEAR_TEETH = [8, 12, 16, 20, 24, 36];
export const TURNTABLE_TEETH = [60, 28];

function generateCombos(prefix, startIndex, count, values) {
  if (prefix.length === count) return [prefix];
  let combos = [];
  for (let i = startIndex; i < values.length; i++) {
    combos = combos.concat(
      generateCombos([...prefix, values[i]], i, count, values)
    );
  }
  return combos;
}

export function approximateRatio(
  x,
  {
    factorCount = 3,
    limit = 50,
    values = GEAR_TEETH,
    fixedDenominator = 60,
  } = {}
) {
  const results = [];

  const numCombos = generateCombos([], 0, factorCount, values);
  const denCombos = generateCombos([], 0, factorCount - 1, values);

  for (const num of numCombos) {
    const numerator = num.reduce((p, v) => p * v);

    for (const denRest of denCombos) {
      const den = [fixedDenominator, ...denRest].sort((a, b) => a - b);
      const denominator = den.reduce((p, v) => p * v);

      const ratio = numerator / denominator;
      const absError = ratio - x;
      const relError = absError / x; // signed relative error

      results.push({
        numerator: num,
        denominator: den,
        ratio,
        absError,
        relError,
      });
    }
  }

  // Sort by absolute relative error
  results.sort((a, b) => Math.abs(a.relError) - Math.abs(b.relError));

  return results.slice(0, limit);
}
