# Contributing to Salla Theme Raed

First off, thank you for considering contributing to Salla Theme Raed! It's people like you that make this theme better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots or GIFs if applicable**
- **Include your environment details** (browser, OS, theme version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the enhancement**
- **Describe the current behavior and explain the expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Process

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **Yarn**
- **Git** for version control
- **Salla CLI** for theme development

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/theme-raed.git
   cd theme-raed
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
5. **Start the development server**:
   ```bash
   npm run dev
   ```

### Project Structure

```
theme-raed/
├── src/
│   ├── assets/
│   │   ├── js/              # JavaScript files
│   │   ├── styles/          # SCSS stylesheets
│   │   ├── images/          # Image assets
│   │   └── fonts/           # Font files
│   ├── views/
│   │   ├── components/      # Reusable components
│   │   ├── layouts/         # Layout templates
│   │   └── pages/           # Page templates
│   └── locales/
│       ├── ar.json          # Arabic translations
│       └── en.json          # English translations
├── tests/                   # Test files
├── public/                  # Built assets
├── docs/                    # Documentation
└── dist/                    # Production build
```

## Pull Request Process

1. **Update the README.md** with details of changes if applicable
2. **Update the CHANGELOG.md** with your changes
3. **Increase version numbers** in package.json if applicable
4. **Ensure all tests pass** and add new tests for new functionality
5. **Ensure your code follows** the established coding standards
6. **Request review** from maintainers

### Pull Request Guidelines

- **Keep pull requests focused** - one feature or bug fix per PR
- **Write clear commit messages** following conventional commits
- **Include tests** for new functionality
- **Update documentation** as needed
- **Ensure backward compatibility** unless it's a breaking change
- **Add screenshots** for UI changes

## Bug Reports

When filing a bug report, please include:

### Environment Information
- Theme version
- Browser and version
- Operating system
- Salla platform version
- Node.js version (for development issues)

### Bug Description
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots or videos if applicable
- Console errors if any

### Minimal Reproduction
If possible, provide a minimal reproduction of the issue:
- Link to a live example
- Code snippet
- Configuration that causes the issue

## Development Setup

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Salla Configuration
SALLA_STORE_ID=your_store_id
SALLA_API_URL=https://api.salla.dev

# Development
DEV_SERVER_PORT=3000
NODE_ENV=development
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint JavaScript files
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run deploy` - Deploy to Salla platform

## Coding Standards

### JavaScript

- Use **ES6+** features
- Follow **Airbnb JavaScript Style Guide**
- Use **ESLint** and **Prettier** for code formatting
- Write **meaningful variable and function names**
- Add **JSDoc comments** for functions and classes
- Avoid **console.log** in production code

```javascript
/**
 * Calculate the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (0.1 for 10%)
 * @returns {number} The total price including tax
 */
function calculateTotalPrice(price, taxRate) {
  return price * (1 + taxRate);
}
```

### CSS/SCSS

- Use **SCSS** for stylesheets
- Follow **BEM methodology** for class naming
- Use **Tailwind CSS** utility classes when possible
- Write **mobile-first** responsive styles
- Use **CSS custom properties** for theming
- Follow **Stylelint** rules

```scss
// Component: Product Card
.product-card {
  @apply bg-white rounded-lg shadow-soft overflow-hidden;
  
  &__image {
    @apply w-full h-48 object-cover;
  }
  
  &__content {
    @apply p-4;
  }
  
  &__title {
    @apply text-lg font-semibold text-gray-900 mb-2;
  }
  
  &__price {
    @apply text-xl font-bold text-primary-600;
  }
}
```

### HTML/Twig

- Use **semantic HTML5** elements
- Ensure **accessibility** with proper ARIA labels
- Support **RTL languages**
- Use **Twig** templating best practices
- Validate **HTML markup**

```twig
{# Product Card Component #}
<article class="product-card" role="article" aria-labelledby="product-{{ product.id }}-title">
  <img 
    src="{{ product.image }}" 
    alt="{{ product.name }}" 
    class="product-card__image"
    loading="lazy"
  >
  <div class="product-card__content">
    <h3 id="product-{{ product.id }}-title" class="product-card__title">
      {{ product.name }}
    </h3>
    <p class="product-card__price" aria-label="Price">
      {{ product.price | currency }}
    </p>
  </div>
</article>
```

## Testing Guidelines

### Unit Tests

- Write tests for **all new functionality**
- Use **Jest** for JavaScript testing
- Aim for **70%+ code coverage**
- Test **edge cases** and **error conditions**
- Use **descriptive test names**

```javascript
describe('calculateTotalPrice', () => {
  it('should calculate total price with tax correctly', () => {
    const result = calculateTotalPrice(100, 0.1);
    expect(result).toBe(110);
  });
  
  it('should handle zero tax rate', () => {
    const result = calculateTotalPrice(100, 0);
    expect(result).toBe(100);
  });
  
  it('should throw error for negative price', () => {
    expect(() => calculateTotalPrice(-100, 0.1)).toThrow();
  });
});
```

### Integration Tests

- Test **component interactions**
- Test **API integrations**
- Test **user workflows**
- Use **realistic test data**

### Accessibility Testing

- Test with **screen readers**
- Verify **keyboard navigation**
- Check **color contrast**
- Validate **ARIA labels**
- Test **focus management**

### Performance Testing

- Monitor **Core Web Vitals**
- Test **loading performance**
- Verify **mobile performance**
- Check **bundle sizes**

## Accessibility Guidelines

- Follow **WCAG 2.1 AA** standards
- Ensure **keyboard navigation** works
- Provide **alt text** for images
- Use **semantic HTML** elements
- Implement **proper focus management**
- Test with **screen readers**
- Maintain **color contrast** ratios
- Support **reduced motion** preferences

## Performance Guidelines

- Optimize **images** (use WebP when possible)
- Implement **lazy loading**
- Minimize **JavaScript bundles**
- Use **efficient CSS**
- Implement **caching strategies**
- Monitor **Core Web Vitals**
- Test on **slow networks**
- Optimize for **mobile devices**

## Security Guidelines

- **Validate all inputs**
- **Sanitize user content**
- Use **HTTPS** for all requests
- Implement **Content Security Policy**
- Avoid **XSS vulnerabilities**
- Keep **dependencies updated**
- Follow **OWASP guidelines**
- Report **security issues** privately

## Internationalization (i18n)

- Support **RTL languages** (Arabic)
- Use **translation keys** instead of hardcoded text
- Test **text expansion** in different languages
- Ensure **proper date/number formatting**
- Support **multiple currencies**
- Test **font rendering** for different scripts

## Git Workflow

### Branch Naming

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation updates
- `refactor/code-improvement` - Code refactoring
- `test/test-addition` - Adding tests

### Commit Messages

Follow [Conventional Commits](https://conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

Examples:
```
feat(product): add quick view modal
fix(cart): resolve quantity update issue
docs(readme): update installation instructions
style(header): improve mobile navigation
refactor(utils): optimize image loading function
test(product): add unit tests for price calculation
```

### Commit Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `perf` - Performance improvements
- `ci` - CI/CD changes

## Code Review Process

### For Contributors

- **Self-review** your code before submitting
- **Test thoroughly** on different devices/browsers
- **Write clear descriptions** of changes
- **Respond promptly** to review feedback
- **Update your PR** based on feedback

### For Reviewers

- **Be constructive** and helpful
- **Focus on code quality** and standards
- **Check for security** issues
- **Verify accessibility** compliance
- **Test the changes** when possible
- **Approve promptly** when ready

## Release Process

1. **Update version** in package.json
2. **Update CHANGELOG.md** with new changes
3. **Create release branch** from main
4. **Run full test suite**
5. **Build and test** production version
6. **Create GitHub release** with release notes
7. **Deploy to Salla** marketplace
8. **Announce release** to community

## Documentation

### Code Documentation

- **Comment complex logic**
- **Document public APIs**
- **Provide usage examples**
- **Keep comments up to date**

### User Documentation

- **Update README.md** for new features
- **Provide installation guides**
- **Create usage examples**
- **Document configuration options**
- **Include troubleshooting guides**

## Community Guidelines

### Communication

- **Be respectful** and inclusive
- **Use clear language**
- **Provide context** for discussions
- **Help newcomers**
- **Share knowledge**

### Getting Help

- **Search existing issues** first
- **Use appropriate channels**:
  - GitHub Issues for bugs and features
  - Telegram for general discussion
  - Email for security issues
- **Provide detailed information**
- **Be patient** with responses

## Recognition

Contributors will be recognized in:

- **CHANGELOG.md** for significant contributions
- **README.md** contributors section
- **GitHub releases** acknowledgments
- **Social media** shoutouts for major features

## Questions?

If you have questions about contributing, please:

- **Check existing documentation**
- **Search GitHub issues**
- **Ask in Telegram**: [@salladev](https://t.me/salladev)
- **Email us**: developers@salla.sa

Thank you for contributing to Salla Theme Raed! 🎉