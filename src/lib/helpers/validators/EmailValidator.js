/**
 * Passes if input matches *@*.*
 * @param {[string]} input User-entered value
 * @returns object
 */
export default function EmailValidator(input) {
  const parsed = {
    isValid: false,
    error: 'Invalid email address',
    reformat: false,
    formatted: null,
  };
  
  const pattern = /.+@.+\../;
  
  if (pattern.test(input)) {
    parsed.isValid = true;
  } 
  
  return parsed;
}
