
---

# easy_validation-package

A simple validation package for TypeScript, providing various validation functions and error handling.

## Installation

You can install `easy_validation-package` via npm:

```bash
npm install easy_validation-package
```

## Usage

### Importing

Import the validation functions and `ValidationError` class into your TypeScript file:

```typescript
import { validateAndLog, isString, isNumber, ValidationError } from 'easy_validation-package';
```

### Using Validation Functions

Example usage of validation functions:

```typescript
try {
    validateAndLog('String', isString, 'Hello'); // Valid string
    validateAndLog('String', isString, 123);    // Throws ValidationError: Value must be a string

    validateAndLog('Number', isNumber, 456);    // Valid number
    validateAndLog('Number', isNumber, 'ABC');  // Throws ValidationError: Value must be a number
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation failed:', error.message);
    } else {
        console.error('Unexpected error occurred:', error);
    }
}
```

### Customizing Validation

You can create your own validation functions and use them with `validateAndLog`:

```typescript
function isEmail(value: any): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof value !== 'string' || !pattern.test(value)) {
        throw new ValidationError('Invalid email format');
    }
    return true;
}

try {
    validateAndLog('Email', isEmail, 'test@example.com');    // Valid email
    validateAndLog('Email', isEmail, 'invalid-email');      // Throws ValidationError: Invalid email format
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation failed:', error.message);
    } else {
        console.error('Unexpected error occurred:', error);
    }
}
```

### Error Handling

Ensure to handle `ValidationError` specifically for validation errors:

```typescript
try {
    // Validation code here
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation failed:', error.message);
        // Handle validation error appropriately
    } else {
        console.error('Unexpected error occurred:', error);
        // Handle unexpected errors
    }
}
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
#   v a l i d a t i o n - p a c k a g e  
 