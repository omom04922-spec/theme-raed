# Salla Theme Raed - Advanced E-commerce Theme

<div id="top"></div>
<br />
<div align="center"> 
  <a href="https://salla.dev"> 
    <img src="https://salla.dev/wp-content/uploads/2023/03/1-Light.png" alt="Logo"> 
  </a>
  <h1 align="center">Theme Raed</h1>
  <p align="center">
    Theme Raed is the starting point for developing Themes for Salla Stores. 
    <br />
    <a href="https://salla.dev/"><strong>Explore our blogs »</strong></a>
    <br />
    <a href="https://github.com/omom04922-spec/theme-raed/issues/new">Report Bug</a> · 
    <a href="https://github.com/omom04922-spec/theme-raed/discussions/new">Request Feature</a> . <a href="https://t.me/salladev">&lt;/Salla Developers&gt;</a> . <a href="https://docs.salla.dev/?nav=01HNFTD5Y5ESFQS3P9MJ0721VM">Official Documentation</a> 
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
<ol>
<li><a  href="#overview">🌟 Overview</a></li>
<li><a  href="#features">✨ Features</a></li>
<li><a  href="#getting-started">🚀 Getting Started</a>
<ul>
<li><a  href="#prerequisite">Prerequisite</a></li>
<li><a  href="#install">Installation</a></li>
</ul>
</li>
<li>
<a  href="#usage">Usage</a>
<ul>
<li><a  href="#directory-structure">Directory Structure</a></li>
<li><a  href="#theme-preview">Theme Preview</a></li>
</ul>
</li>
<li>
<a  href="#main-features">Main Features</a>
<ul>
<li><a  href="#theme-features">Theme Features</a></li>
<li><a  href="#theme-components">Theme Components</a></li>
</ul>
</li>
<li><a  href="#support">Support</a></li>
<li><a  href="#contributing">Contributing</a></li>
<li><a  href="#credits">Credits</a></li>
<li><a  href="#license">License</a></li>
</ol>
</details>

## 🌟 Overview

**Salla Theme Raed** is a cutting-edge, high-performance e-commerce theme designed specifically for the Salla platform. Built with modern web technologies and best practices, it delivers exceptional user experience, outstanding performance, and comprehensive accessibility support.

### Key Highlights

- 🚀 **Lightning Fast**: Optimized for Core Web Vitals with lazy loading and efficient caching
- 📱 **Progressive Web App**: Full PWA support with offline functionality
- 🌍 **Multilingual**: Native Arabic (RTL) and English (LTR) support
- ♿ **Accessible**: WCAG 2.1 AA compliant with comprehensive accessibility features
- 🎨 **Modern Design**: Clean, responsive design with smooth animations
- 🛒 **E-commerce Ready**: Advanced shopping features and payment integrations
- 🔧 **Developer Friendly**: Modern build tools and comprehensive documentation

## ✨ Features

### 🎨 Design & User Experience

- **Responsive Design**: Seamless experience across all devices and screen sizes
- **RTL/LTR Support**: Native bidirectional text support for Arabic and English
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Smooth Animations**: CSS3 and JavaScript animations for enhanced UX
- **Modern Typography**: Optimized font loading with Cairo and system fonts
- **Accessibility First**: Screen reader support, keyboard navigation, and ARIA labels

### ⚡ Performance & Optimization

- **Core Web Vitals**: Optimized for LCP, FID, and CLS metrics
- **Lazy Loading**: Images, components, and routes loaded on demand
- **Code Splitting**: Efficient bundle splitting for faster load times
- **Service Worker**: Advanced caching strategies and offline support
- **Image Optimization**: WebP format with fallbacks and responsive images
- **Critical CSS**: Above-the-fold CSS inlined for faster rendering

### 🛒 E-commerce Features

- **Advanced Product Gallery**: Zoom, 360° view, and multiple image formats
- **Smart Search**: Real-time search with filters and suggestions
- **Wishlist Management**: Save and organize favorite products
- **Cart Optimization**: Persistent cart with quantity updates
- **Checkout Flow**: Streamlined, secure checkout process
- **Payment Integration**: Multiple payment gateways support
- **Order Tracking**: Real-time order status updates
- **Customer Reviews**: Rating and review system

### 🧩 Components & Modules

- **Product Cards**: Responsive product display with quick actions
- **Navigation Menu**: Multi-level navigation with mobile optimization
- **Newsletter Signup**: Email subscription with validation
- **Testimonials**: Customer testimonials carousel
- **Blog Integration**: SEO-optimized blog layout
- **Contact Forms**: Accessible contact and inquiry forms
- **Social Media**: Integration with major social platforms

## 🚀 Getting Started

### Prerequisite

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **Yarn**
- **Git** for version control
- **Salla CLI** for theme deployment

### Install

1. **Clone the repository**
   ```bash
   git clone https://github.com/omom04922-spec/theme-raed.git
   cd theme-raed
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Usage

### Directory Structure

```
theme-raed/
├── src/
│   ├── assets/
│   │   ├── js/              # JavaScript files
│   │   ├── styles/          # SCSS stylesheets
│   │   ├── images/          # Image assets
│   │   ├── fonts/           # Font files
│   │   └── manifest.json    # PWA manifest
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

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run test` - Run test suite
- `npm run lint` - Lint JavaScript files
- `npm run format` - Format code with Prettier
- `npm run deploy` - Deploy to Salla platform

### Theme Preview

To preview your theme:

1. Start the development server: `npm run dev`
2. Open your browser to `http://localhost:3000`
3. Use Salla CLI to sync with your store: `salla theme sync`

## Main Features

### Theme Features

#### 🎨 Customization
- **Theme Settings**: Comprehensive customization options
- **Color Schemes**: Multiple predefined color palettes
- **Typography**: Font family and size customization
- **Layout Options**: Various layout configurations
- **Component Visibility**: Show/hide theme components

#### 📱 Mobile Experience
- **Touch Optimized**: Gesture-friendly interface
- **Mobile Menu**: Collapsible navigation for mobile
- **Swipe Gestures**: Product gallery and carousel navigation
- **App-like Feel**: PWA features for native app experience

#### 🔍 SEO & Analytics
- **SEO Optimized**: Structured data and meta tags
- **Analytics Ready**: Google Analytics and GTM integration
- **Social Sharing**: Open Graph and Twitter Card support
- **Sitemap**: Automatic sitemap generation

### Theme Components

#### Navigation
- Multi-level dropdown menus
- Breadcrumb navigation
- Search functionality
- Language switcher
- Currency selector

#### Product Display
- Product grid and list views
- Quick view modals
- Product comparison
- Recently viewed products
- Related products

#### Shopping Features
- Shopping cart sidebar
- Wishlist functionality
- Product filters and sorting
- Pagination
- Stock status indicators

## 🛠 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Salla Configuration
SALLA_STORE_ID=your_store_id
SALLA_API_URL=https://api.salla.dev

# Development
DEV_SERVER_PORT=3000
NODE_ENV=development

# Analytics
GA_TRACKING_ID=your_ga_id
GTM_CONTAINER_ID=your_gtm_id
```

### Theme Settings

Customize your theme through `theme-settings.json`:

```json
{
  "colors": {
    "primary": "#1a73e8",
    "secondary": "#34a853"
  },
  "typography": {
    "fontFamily": "Cairo, sans-serif"
  },
  "layout": {
    "containerWidth": "1200px"
  }
}
```

## 🌍 Internationalization

The theme supports multiple languages:

- **Arabic (ar)**: Right-to-left (RTL) layout
- **English (en)**: Left-to-right (LTR) layout

Translations are stored in `src/locales/` directory.

## 🎨 Styling

The theme uses SCSS with a modular architecture:

- **Variables**: `src/assets/styles/_variables.scss`
- **Mixins**: `src/assets/styles/_mixins.scss`
- **Components**: `src/assets/styles/components/`
- **Pages**: `src/assets/styles/pages/`

## 🧪 Testing

Run tests with:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## ⚡ Performance Optimization

### Built-in Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Remove unused code
- **Minification**: CSS and JavaScript compression
- **Image Optimization**: WebP conversion and compression
- **Caching**: Service worker with cache strategies

### Performance Monitoring

- **Lighthouse**: Automated performance audits
- **Web Vitals**: Core Web Vitals tracking
- **Bundle Analysis**: Webpack bundle analyzer

## 🚀 Deployment

### Salla Platform

1. **Install Salla CLI**
   ```bash
   npm install -g @salla.sa/cli
   ```

2. **Login to Salla**
   ```bash
   salla login
   ```

3. **Deploy theme**
   ```bash
   npm run deploy
   ```

### Manual Deployment

1. Build the theme: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your web server to serve the files

## 🔧 Troubleshooting

### Common Issues

**Build Errors**
- Ensure Node.js version is 14.0.0 or higher
- Clear node_modules and reinstall dependencies
- Check for syntax errors in SCSS files

**Development Server Issues**
- Check if port 3000 is available
- Verify environment variables are set correctly
- Clear browser cache and restart server

**Deployment Issues**
- Verify Salla CLI is properly configured
- Check network connectivity
- Ensure all required files are included in build

### Getting Help

- **Documentation**: [Salla Developer Docs](https://docs.salla.dev)
- **Community**: [Salla Developers Telegram](https://t.me/salladev)
- **Issues**: [GitHub Issues](https://github.com/omom04922-spec/theme-raed/issues)
- **Support**: [Contact Salla Support](https://salla.sa/contact)

## Support

For support and questions:

- 📧 **Email**: developers@salla.sa
- 💬 **Telegram**: [@salladev](https://t.me/salladev)
- 🐛 **Issues**: [GitHub Issues](https://github.com/omom04922-spec/theme-raed/issues)
- 📖 **Documentation**: [Official Docs](https://docs.salla.dev)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

## Credits

- **Salla Team**: Core development and maintenance
- **Contributors**: Community contributors and developers
- **Libraries**: Open source libraries and frameworks used
- **Icons**: Heroicons, Feather Icons
- **Fonts**: Google Fonts (Cairo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by the Salla Team</p>
  <p>
    <a href="https://salla.sa">Website</a> ·
    <a href="https://docs.salla.dev">Documentation</a> ·
    <a href="https://github.com/SallaApp">GitHub</a> ·
    <a href="https://twitter.com/SallaHQ">Twitter</a>
  </p>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>