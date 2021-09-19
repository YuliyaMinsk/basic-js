import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  // throw new NotImplementedError('Not implemented');
  let nameOfTeam = '';
  if (!Array.isArray(members)) return false;

  let newMember = members.map(function(member) {
    return (typeof(member) == 'string') ? member.trim().toUpperCase() : '' ;
  });

  newMember = newMember.sort();
  for (let i = 0; i < newMember.length; i++) {
    if (typeof(newMember[i]) != 'string') continue;
    nameOfTeam = nameOfTeam + newMember[i].charAt(0);
  }

  return nameOfTeam;
}

