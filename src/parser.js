export const C = {
  METHOD: {
    '0': 'Organic',
    '1': 'Free Range',
    '2': 'Barn',
    '3': 'Caged',
  },
  COUNTRY: {
    'UK': 'United Kingdom',
  },
  MAX_STARS: 5,
};

// Parse an egg code
export default function parser(code) {
  const groups = code.match(/^([0-3])-?([A-z]{2})-?([\d]{5})$/);

  if (!groups) {
    return null;
  }

  // Create a rudimentary rating based upon the method of production
  // Organic is 5*, Free Range is 4*, etc.
  // Return 0 for Unknown.
  const numericMethod = parseInt(groups[1], 10);
  const rating = isNaN(numericMethod) ? 0 : C.MAX_STARS - numericMethod;

  return {
    method: C.METHOD[groups[1]] || 'Unknown',
    country: C.COUNTRY[groups[2]] || groups[2],
    farm: groups[3],
    rating,
  };
};
