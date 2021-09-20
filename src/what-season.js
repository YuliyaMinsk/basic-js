import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  // throw new NotImplementedError('Not implemented');
  if (!date) return 'Unable to determine the time of year!';

  try {
    date.getUTCFullYear();
  } catch (e) {
    throw new Error("Invalid date!");
  }

  if (date.getMonth() == 0) return 'winter';
  if (date.getMonth() == 1) return 'winter';
  if (date.getMonth() == 2) return 'spring';
  if (date.getMonth() == 3) return 'spring';
  if (date.getMonth() == 4) return 'spring';
  if (date.getMonth() == 5) return 'summer';
  if (date.getMonth() == 6) return 'summer';
  if (date.getMonth() == 7) return 'summer';
  if (date.getMonth() == 8) return 'autumn';
  if (date.getMonth() == 9) return 'autumn';
  if (date.getMonth() == 10) return 'autumn';
  if (date.getMonth() == 11) return 'winter';

  return 'Invalid date!';
}
