#Validator format

Validators should take in a string (input) and return an object that contains these keys:

* `isValid`:   bool -   if the input value passed validation or not
* `error`:     string - if validation fails, the error message to be displayed to the user. 
* `reformat`:  bool —   if true, input should be replaced with the `formatted` value
* `formatted`: string – the input value reformatted in a preferred way. i.e. user value
                        of 202.650.2600 might have a formatted value (202) 650-2600

Example:

    function AValidator(input) {
      const parsed = {
        isValid: false,
        error: 'That is not an A',
        reformat: true,
        formatted: 'A'
      };
      
      if (value === 'a' || value === 'A') {
        parsed.isValid = true;
      } 
      
      return parsed;
    }