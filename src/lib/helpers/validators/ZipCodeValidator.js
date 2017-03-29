export default function ZipCodeValidator(value) {
  const parsed = {
    isValid: false,
    error: 'Invalid ZIP Code',
    reformat: false,
    formatted: null,
  };
  
  const pattern = /^\b\d{5}(-\d{4})?\b$/;
  
  if (pattern.test(value)) {
    parsed.isValid = true;
  } 
  
  return parsed;
}
