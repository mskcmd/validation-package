 
```markdown
# easy_validation-package

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A simple, powerful validation package for TypeScript, providing various validation functions and robust error handling.

## 🚀 Features

- Easy-to-use validation functions
- Custom error handling with `ValidationError` class
- Colorized console output for validation results
- Extensible architecture for custom validations

## 📦 Installation

Install `easy_validation-package` via npm:

```bash
npm install easy_validation-package
```

## 🛠️ Usage

### Importing

Import the validation functions and `ValidationError` class into your TypeScript file:

```typescript
import { 
  validateAndLog, 
  isString, 
  isNumber, 
  ValidationError 
} from 'easy_validation-package';
```

### Using Validation Functions

Example usage of validation functions:

```typescript
try {
  validateAndLog('String', isString, 'Hello');  // ✅ Valid string
  validateAndLog('String', isString, 123);      // ❌ Throws ValidationError
  validateAndLog('Number', isNumber, 456);      // ✅ Valid number
  validateAndLog('Number', isNumber, 'ABC');    // ❌ Throws ValidationError
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('🚫 Validation failed:', error.message);
  } else {
    console.error('❗ Unexpected error occurred:', error);
  }
}
```

### Customizing Validation

Create your own validation functions and use them with `validateAndLog`:

```typescript
function isEmail(value: any): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof value !== 'string' || !pattern.test(value)) {
    throw new ValidationError('Invalid email format');
  }
  return true;
}

try {
  validateAndLog('Email', isEmail, 'test@example.com');  // ✅ Valid email
  validateAndLog('Email', isEmail, 'invalid-email');     // ❌ Throws ValidationError
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('🚫 Validation failed:', error.message);
  } else {
    console.error('❗ Unexpected error occurred:', error);
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
    console.error('🚫 Validation failed:', error.message);
    // Handle validation error appropriately
  } else {
    console.error('❗ Unexpected error occurred:', error);
    // Handle unexpected errors
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name/Organization]
```

This README now includes:

1. Badges for version and license
2. Emojis for better visual organization
3. Code blocks with syntax highlighting
4. Clear sections for installation, usage, and contributing
5. Examples of both successful and error cases
6. A more appealing layout overall

You can further customize this README by:

- Adding a logo at the top
- Including a table of contents for longer READMEs
- Adding more detailed examples or use cases
- Including information about testing, if applicable
- Adding contact information or links to related projects

Remember to replace "[Your Name/Organization]" with the appropriate information. This README should provide a clear, attractive, and informative introduction to your package for potential users.
