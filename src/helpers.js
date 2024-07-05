export function removeTags(str) {
   if ((str === null) || (str === '') || (str === undefined)) {
      return str = '-';
   } else {
      return str.replace(/(<([^>]+)>)/ig, '');
   };
};