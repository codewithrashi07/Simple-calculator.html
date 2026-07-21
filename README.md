# 🧮 Advanced Calculator - Scientific Edition

> A **powerful, feature-rich web calculator** with scientific functions, dark mode, history tracking, and memory operations. Built with pure HTML5, CSS3, and Vanilla JavaScript - **no dependencies needed!**

![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Status](https://img.shields.io/badge/Status-Stable-brightgreen)

---

## 📖 Overview

**Advanced Calculator** started as a simple calculator project and evolved into a **professional-grade calculation tool**. Whether you're a student solving math problems, an engineer doing complex calculations, or just need a quick everyday calculator - this tool has you covered!

### What Makes It Special? ✨

- 🔬 **Scientific Functions** - Not just +, −, ×, ÷
- 🌙 **Dark Mode** - Easy on the eyes, works anytime
- 📜 **History Tracking** - Never lose a calculation
- 💾 **Memory Functions** - M+, M-, MR, MC just like real calculators
- ⌨️ **Keyboard Support** - Type faster than clicking
- 📱 **Mobile Friendly** - Works on phone, tablet, desktop
- 🎨 **Beautiful UI** - Smooth animations & modern design
- ⚡ **Instant** - No loading, no lag, pure JavaScript magic!

---

## ✨ Features

### 🎯 Core Features

| Feature | Description |
|---------|-------------|
| ➕ **Basic Arithmetic** | Addition, Subtraction, Multiplication, Division |
| 🔢 **Decimal Support** | Full decimal number precision |
| ⌫ **Backspace** | Delete last digit without clearing |
| 🔄 **Clear Display** | Reset calculator instantly |
| ✖️ **Sign Toggle** | Quickly negate numbers |

### 🔬 Scientific Functions

**Advanced Math at Your Fingertips:**

```
√x      - Square Root
x²      - Square any number
x³      - Cube any number  
x^y     - Power operations
sin/cos/tan - Trigonometry (in degrees)
log/ln  - Logarithmic functions
n!      - Factorial calculations
1/x     - Reciprocal
|x|     - Absolute value
%       - Percentages
π       - Pi constant (3.14159...)
e       - Euler's number (2.71828...)
```

### 💾 Memory Functions

Keep your important values handy:

- **M+** - Add current value to memory
- **M−** - Subtract current value from memory  
- **MR** - Recall stored memory value
- **MC** - Clear memory
- **Memory Display** - See current memory value at a glance

### 📜 Calculation History

Never forget a calculation:

- ✅ **Track Everything** - Stores up to 50 calculations
- ✅ **Time Stamps** - Know when you calculated
- ✅ **Quick Restore** - Click any history item to use result
- ✅ **Auto-Saved** - History persists even after refresh
- ✅ **One-Click Clear** - Delete all history anytime

### 🎨 Theme System

**Two beautiful themes - choose what suits you:**

#### 🌙 Dark Mode
- Purple & dark colors
- Easy on the eyes at night
- Professional appearance
- Perfect for long sessions

#### ☀️ Light Mode  
- Purple gradient background
- Classic bright interface
- Great for daytime use
- High contrast for readability

**Auto-saves your preference!**

### ⌨️ Full Keyboard Support

No mouse needed! Use keyboard shortcuts:

```
0-9         → Number input
+, -, *, /  → Operators
.           → Decimal point
Enter / =   → Calculate result
Backspace   → Delete last digit
Escape      → Clear display
```

### 📱 Responsive Design

Works perfectly on:
- 🖥️ **Desktop** - Full feature set
- 📱 **Mobile** - Touch-optimized buttons
- 📊 **Tablet** - Comfortable viewing
- 🌐 **All Browsers** - Chrome, Firefox, Safari, Edge

---

## 🚀 Getting Started

### Option 1: Direct Usage (Recommended for Beginners)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codewithrashi07/Simple-calculator.html.git
   cd Simple-calculator.html
   ```

2. **Open in browser:**
   ```bash
   # macOS
   open index.html
   
   # Windows
   start index.html
   
   # Linux
   xdg-open index.html
   ```

   Or simply **double-click** `index.html` file!

### Option 2: Live Demo (Coming Soon)

Once GitHub Pages is enabled:
```
🌐 https://codewithrashi07.github.io/Simple-calculator.html/
```

### Option 3: Local Server

For best experience with local development:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

---

## 📂 Project Structure

```
Simple-calculator.html/
│
├── 📄 index.html           # Main HTML file with calculator UI
├── 🎨 styles.css           # Complete styling + dark mode
├── 📜 script.js            # Full JavaScript functionality
├── 📖 README.md            # Documentation (you are here!)
├── 📋 CHANGELOG.md         # Version history & updates
├── 📝 RELEASE_NOTES.md     # Detailed release info
├── 🤝 CONTRIBUTING.md      # How to contribute
├── 📦 package.json         # Project metadata
├── 📜 LICENSE              # MIT License
└── 🚫 .gitignore           # Git ignore rules
```

### File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Structure & HTML markup |
| `styles.css` | All styling, animations, dark mode |
| `script.js` | Complete calculator logic & functions |

---

## 🛠️ Technologies Used

### Frontend Technologies

- **HTML5** - Semantic markup, modern structure
- **CSS3** - Flexbox, Grid, animations, transitions
- **JavaScript (ES6+)** - Modern JavaScript features
- **Local Storage API** - Data persistence

### No External Dependencies!

Pure vanilla JavaScript - everything works out of the box without npm, webpack, or build tools!

### Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Safari | Latest | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| Mobile Browsers | Latest | ✅ Full Support |

---

## 📖 How to Use

### Basic Calculations

```
Example: 25 + 15
1. Click "2" then "5"
2. Click "+"
3. Click "1" then "5"
4. Click "=" 
Result: 40 ✅
```

### Scientific Mode

```
Example: √16
1. Click "Scientific" button
2. Click "16"
3. Click "√x" button
Result: 4 ✅
```

### Using History

```
1. Perform some calculations
2. Click "📋 History" button
3. History panel opens on right
4. Click any previous calculation
5. Result is restored to display
```

### Memory Operations

```
Example: Store 100, add 50, recall
1. Enter "100", click "M+" (stores 100)
2. Enter "50", click "M+" (now memory = 150)
3. Click "MR" (displays 150)
4. Click "MC" (clears memory to 0)
```

### Theme Switching

```
1. Click 🌙 button (top-right)
2. Calculator switches to dark mode
3. Theme automatically saved
4. Click again to switch back to light mode
```

---

## ⌨️ Keyboard Shortcuts Reference

Perfect for power users:

```
NUMBERS:        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
OPERATORS:      + (add)
                - (subtract)
                * (multiply)
                / (divide)
SPECIAL:        . (decimal)
                Enter or = (calculate)
                Backspace (delete)
                Escape (clear)
```

---

## 🎨 Customization Guide

### Change Button Colors

Edit `styles.css`:

```css
/* Operator buttons color */
.btn.operator {
    background: #667eea;  /* Change this */
}

/* Equals button color */
.btn.equals {
    background: #48bb78;  /* Change this */
}

/* Clear button color */
.btn.clear {
    background: #f56565;  /* Change this */
}
```

### Modify Display Size

```css
.current-operand {
    font-size: 2.5em;  /* Change this */
}
```

### Adjust Button Padding

```css
.btn {
    padding: 18px;  /* Change this */
}
```

### Change Background Gradient

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change colors above */
}
```

---

## 🔍 Technical Highlights

### Pure JavaScript - No Dependencies

```javascript
// Everything is vanilla JS
// No jQuery, no libraries, no build tools
// Just pure, clean JavaScript code
```

### Local Storage Implementation

```javascript
// Automatic saving of:
// - Theme preference (dark/light)
// - Calculation history
// - Memory value
// Data persists even after browser restart!
```

### Responsive Design

```css
/* Mobile-first approach */
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

### Smooth Animations

```css
/* Hover effects */
/* Button press animations */
/* Smooth transitions on theme toggle */
/* Beautiful gradient backgrounds */
```

---

## 💡 Tips & Tricks

### 🎯 Pro Tips

1. **Type faster** - Use keyboard instead of clicking
2. **Remember results** - Use history panel  
3. **Save values** - Use memory functions (M+, M-, MR, MC)
4. **Night mode** - Toggle dark mode with one click
5. **Quick clear** - Press Escape key
6. **Negative numbers** - Use +/− button or prefix with -

### 🔧 Troubleshooting

**Calculator not working?**
- Refresh the page
- Check browser console (F12)
- Clear browser cache
- Try different browser

**History not saving?**
- Enable Local Storage in browser
- Check browser privacy settings
- Try private/incognito mode

**Dark mode not working?**
- Clear browser cache
- Check if JavaScript is enabled
- Try different browser

---

## 📊 Comparison: Before vs After

| Feature | v0.1.0 (Initial) | v1.0.0 (Current) |
|---------|------------------|------------------|
| Basic Operations | ✅ 4 functions | ✅ 20+ functions |
| Scientific Mode | ❌ No | ✅ Yes |
| Themes | ❌ 1 theme | ✅ Dark + Light |
| History | ❌ No | ✅ Full tracking |
| Memory | ❌ No | ✅ M+, M-, MR, MC |
| Keyboard Support | ❌ No | ✅ Full support |
| Mobile Responsive | ⚠️ Basic | ✅ Fully optimized |
| Sound Effects | ❌ No | ✅ Yes |
| Code Quality | ⚠️ Inline | ✅ Organized files |
| File Size | 10KB | 50KB (feature-rich) |

---

## 🐛 Known Issues

**Currently:** No known issues! 🎉

If you find a bug:
1. Check [Issues](https://github.com/codewithrashi07/Simple-calculator.html/issues)
2. Create a new issue with:
   - Browser & version
   - Steps to reproduce
   - Expected vs actual result
   - Screenshots (if applicable)

---

## 🚀 Future Roadmap

We're constantly improving! Planned features:

- [ ] 💱 **Currency Converter** - Real-time exchange rates
- [ ] 📏 **Unit Converter** - Length, weight, temperature
- [ ] 📊 **Statistics** - Mean, median, mode calculations
- [ ] 📝 **Expression Evaluation** - Type entire equations
- [ ] 📥 **Export to PDF** - Save calculations
- [ ] 🎨 **More Themes** - Additional color schemes
- [ ] 🎤 **Voice Input** - Speak calculations
- [ ] 💾 **Cloud Sync** - Save across devices
- [ ] 🌍 **Multi-Language** - Support for multiple languages

---

## 🤝 Contributing

We love contributions! Whether it's:
- 🐛 **Bug reports**
- ✨ **New features**  
- 📖 **Documentation improvements**
- 🎨 **Design enhancements**
- 🌍 **Translations**

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📜 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

### What You Can Do:
✅ Use it for personal projects  
✅ Modify and customize  
✅ Share with others  
✅ Use in commercial projects  

### What You Must Do:
📝 Include the original license  
📝 Give credit to the author  

---

## 👨‍💻 Author

**Rashi Yadav**
- GitHub: [@codewithrashi07](https://github.com/codewithrashi07)
- Email: rashiyadav684@gmail.com
- Portfolio: [Coming Soon]

---

## ⭐ Support This Project

If you find this calculator useful:

1. **Star ⭐** - Give it a star on GitHub
2. **Share 📢** - Tell your friends about it
3. **Contribute 🤝** - Submit improvements
4. **Report Issues 🐛** - Help us improve
5. **Sponsor 💝** - Support the development

---

## 📞 Get Help

### Documentation
- 📖 [README](README.md) - You are here!
- 📋 [CHANGELOG](CHANGELOG.md) - Version history
- 📝 [RELEASE_NOTES](RELEASE_NOTES.md) - Detailed release info
- 🤝 [CONTRIBUTING](CONTRIBUTING.md) - Contribution guide

### Questions?
- 💬 [Open an Issue](https://github.com/codewithrashi07/Simple-calculator.html/issues)
- 💭 [Start a Discussion](https://github.com/codewithrashi07/Simple-calculator.html/discussions)
- 📧 Email: rashiyadav684@gmail.com

---

## 🎉 Changelog Highlights

### v1.0.0 (Latest) 🚀
- ✨ Scientific calculator functions
- 🌙 Dark/Light theme system
- 📜 Calculation history tracking
- 💾 Memory functions
- ⌨️ Full keyboard support
- 📱 Responsive mobile design
- 🎨 Beautiful UI/UX

### v0.1.0 (Initial)
- Basic calculator with 4 operations

---

## 🏆 Credits

Made with ❤️ and a lot of ☕ by **Rashi Yadav**

Special thanks to everyone who:
- Uses the calculator
- Reports bugs
- Suggests improvements
- Contributes code
- Shares with others

---

## 📊 Stats

```
💻 Lines of Code:     ~500
🎨 CSS Rules:         ~300
📜 JavaScript:        ~500
📦 Total Size:        ~50KB
⚡ Load Time:         <1s
🌐 Browser Support:   99%+
📱 Mobile Friendly:   ✅
```

---

## 🎓 Learn From This Project

This calculator is great for learning:

- 📚 HTML5 semantic structure
- 🎨 Modern CSS (Grid, Flexbox, animations)
- 💻 JavaScript ES6+ features
- 🧠 Algorithm implementation
- 🎯 Event handling
- 💾 Local Storage API
- 📱 Responsive design
- 🌙 Dark mode implementation

---

## 🙏 Thank You!

Thanks for using **Advanced Calculator**! We hope it makes your calculations faster, easier, and more enjoyable.

**Happy Calculating!** 🧮✨

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

[GitHub](https://github.com/codewithrashi07/Simple-calculator.html) • [Issues](https://github.com/codewithrashi07/Simple-calculator.html/issues) • [Discussions](https://github.com/codewithrashi07/Simple-calculator.html/discussions)

</div>
