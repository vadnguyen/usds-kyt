/**
 * parsed = {
 *   isValid: false,
 *   error: 'Invalid area code',
 *   formatted: '(100) 223-2321'
 * }
 */

 export function PhoneValidator(entry) {
   const parsed = {
     reformat: true,
     originalValue: entry,
     isValid: false,
     formatted: null,
     value: '',
     cleanedValue: '',
     areaCode: null,
     part1: null,
     part2: null,
     invalidChar: false,
     isBlank: false,
     badAreaCode: null,
     badExchangeCode: null,
     wrongCount: false,
     error: '',
   };
   const number = /[0-9]/;
   const separator = /[.,/#!$%^&*;:{}=\-–—_`~()\s+]/;
   const phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

   if (typeof entry === 'string' && entry.length) {
     // Loop over input text and check if each char is a digit or separator
     for (let i = 0; i < entry.length; i += 1) {
       if (number.test(entry[i])) {
         parsed.value += entry[i];
         parsed.cleanedValue += entry[i];
       } else if (separator.test(entry[i])) {
         parsed.cleanedValue += entry[i];
       } else {
         // char is an illegal character so stop checking
         parsed.invalidChar = true;
         break;
       }
     }

     // 11 digits must be 1 + area code + 3 + 4
     // leading 1 is stripped out
     if (parsed.value.length === 11 && parsed.value[0] === '1') {
       parsed.value = parsed.value.substring(1);
     }

     if (parsed.value.length !== 10) {
       parsed.wrongCount = true;
     }

     // 10 digits must be area code + 3 + 4
     // Area code can't start with a 0 or 1
     if (parsed.value.length === 10 && parseInt(parsed.value[0], 10) > 1) {
       parsed.badAreaCode = false;
     } else if (parsed.value.length === 10) {
       parsed.badAreaCode = true;
     }

     // Change code can't start with a 0 or 1
     if (parsed.value.length === 10 && parseInt(parsed.value[3], 10) > 1) {
       parsed.badExchangeCode = false;
     } else {
       parsed.badExchangeCode = true;
     }
   } else {
     parsed.isBlank = true;
   }

   if (!parsed.isBlank && !parsed.wrongCount && !parsed.badAreaCode && !parsed.badExchangeCode) {
     parsed.isValid = true;
   }

   if (parsed.isValid || parsed.badAreaCode || parsed.badExchangeCode) {
     parsed.formatted = parsed.value.replace(phoneFormat, '($1) $2-$3');
     parsed.areaCode = parsed.value.replace(phoneFormat, '$1');
     parsed.part1 = parsed.value.replace(phoneFormat, '$2');
     parsed.part2 = parsed.value.replace(phoneFormat, '$3');
   }

   if (parsed.invalidChar) {
     parsed.error = 'Phone numbers should be only numbers';
   } else if (parsed.badAreaCode && !parsed.wrongCount) {
     parsed.error = 'Invalid U.S. area code';
   } else if (parsed.badExchangeCode && !parsed.wrongCount) {
     parsed.error = 'Invalid U.S. exchange code';
   } else {
     parsed.error = 'Invalid U.S. phone number';
   }

   return parsed;
 }
