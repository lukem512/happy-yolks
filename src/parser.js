export const C = {
  METHOD: {
    '0': 'Organic',
    '1': 'Free Range',
    '2': 'Barn',
    '3': 'Caged',
  },
  COUNTRY: {
    'AT': 'Austria',
    'BE': 'Belgium',
    'BG': 'Bulgaria',
    'CY': 'Cypress',
    'CZ': 'Czech Republic',
    'DE': 'Germany',
    'DK': 'Denmark',
    'EE': 'Estonia',
    'ES': 'Spain',
    'FI': 'Finland',
    'FR': 'France',
    'EL': 'Greece',
    'HR': 'Croatia',
    'HU': 'Hungary',
    'IE': 'Ireland',
    'IT': 'Italy',
    'LT': 'Lithuania',
    'LU': 'Luxemburg',
    'LV': 'Latvia',
    'MT': 'Malta',
    'NL': 'Netherlands',
    'PL': 'Poland',
    'PT': 'Portugal',
    'RO': 'Romania',
    'SE': 'Sweden',
    'SI': 'Slovenia',
    'SK': 'Slovakia',
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
    country: C.COUNTRY[groups[2].toUpperCase()] || groups[2],
    farm: groups[3],
    rating,
  };
};
