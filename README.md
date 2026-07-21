# Advanced Calculator 🧮

A powerful, feature-rich calculator web application with scientific functions, dark mode, history tracking, and memory operations.

## ✨ Features

### 🎯 Core Features
- ✅ **Basic Arithmetic** - Addition, Subtraction, Multiplication, Division
- ✅ **Decimal Support** - Full decimal number support
- ✅ **Backspace Function** - Delete last digit
- ✅ **Clear Display (AC)** - Reset calculator

### 🔬 Scientific Functions
- ✅ **Square Root (√x)** - Calculate square root
- ✅ **Square (x²)** - Calculate square of a number
- ✅ **Cube (x³)** - Calculate cube of a number
- ✅ **Power (x^y)** - Raise to any power
- ✅ **Trigonometric** - sin, cos, tan (in degrees)
- ✅ **Logarithmic** - log (base 10), ln (natural log)
- ✅ **Factorial (n!)** - Calculate factorial
- ✅ **Reciprocal (1/x)** - Calculate reciprocal
- ✅ **Absolute Value (|x|)** - Get absolute value
- ✅ **Percentage (%)** - Calculate percentages
- ✅ **Constants** - π (Pi), e (Euler's number)

### 💾 Memory Functions
- ✅ **M+** - Add current value to memory
- ✅ **M−** - Subtract current value from memory
- ✅ **MR** - Recall value from memory
- ✅ **MC** - Clear memory

### 📜 History & Tracking
- ✅ **Calculation History** - Keep track of all calculations
- ✅ **History Panel** - Slide-out panel showing history
- ✅ **Restore from History** - Click any history item to restore result
- ✅ **Persistent History** - History saved in local storage
- ✅ **Clear History** - Delete all history with one click

### 🎨 User Interface
- ✅ **Dark Mode** - Eye-friendly dark theme
- ✅ **Light Mode** - Classic light theme
- ✅ **Theme Toggle** - Easy theme switching
- ✅ **Mode Switching** - Switch between Basic and Scientific modes
- ✅ **Smooth Animations** - Polished button interactions
- ✅ **Sound Effects** - Optional click feedback

### ⌨️ Input Methods
- ✅ **Mouse/Touch** - Click buttons
- ✅ **Keyboard Support** - Full keyboard control:
  - `0-9` - Number input
  - `+, -, *, /` - Operators
  - `.` - Decimal point
  - `Enter` or `=` - Calculate
  - `Backspace` - Delete last digit
  - `Escape` - Clear display

### 📱 Responsive Design
- ✅ **Desktop** - Optimized for desktop screens
- ✅ **Tablet** - Perfect tablet experience
- ✅ **Mobile** - Fully responsive mobile version
- ✅ **Touch Friendly** - Large buttons for easy tapping

### 💾 Persistent Data
- ✅ **Theme Preference** - Saved in local storage
- ✅ **Calculation History** - Kept in browser storage
- ✅ **Memory Value** - Memory state persists

## 🚀 Getting Started

### Option 1: Direct Usage
1. Clone the repository:
```bash
git clone https://github.com/codewithrashi07/Simple-calculator.html.git
cd Simple-calculator.html
```

2. Open `index.html` in your browser:
```bash
# On Mac
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

Or simply double-click the `index.html` file!

### Option 2: Live Demo
Enable GitHub Pages from repository settings and access it via:
`https://codewithrashi07.github.io/Simple-calculator.html/`

## 📂 Project Structure

```
Simple-calculator.html/
├── index.html          # Main HTML file with calculator structure
├── styles.css          # Complete styling with dark mode support
├── script.js           # JavaScript logic and functionality
└── README.md           # Documentation (you are here!)
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid, animations, transitions
- **Vanilla JavaScript** - Pure JS, no dependencies
- **Local Storage API** - For persisting theme, history, and memory

## 📖 How to Use

### Basic Mode
1. Click number buttons to enter numbers
2. Click operator buttons (+, −, ×, ÷)
3. Enter the second number
4. Press `=` to calculate
5. Use `AC` to clear

### Scientific Mode
1. Click the "Scientific" button at the top
2. Use advanced functions like √x, x², sin, cos, etc.
3. Click on any function button to apply it
4. Switch back to "Basic" mode anytime

### History
1. Click the 📋 History button
2. See all your recent calculations
3. Click any calculation to restore its result
4. Click "Clear History" to delete all

### Memory Functions
1. **M+** - Adds current value to memory
2. **M−** - Subtracts current value from memory
3. **MR** - Shows and restores memory value
4. **MC** - Clears memory to 0
5. Memory display shows current value (if not zero)

### Theme
- Click the 🌙/☀️ button in top-right to toggle dark/light mode
- Your preference is automatically saved

## ⚡ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Input numbers |
| `.` | Add decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` / `=` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear display |

## 🎨 Customization

### Change Color Scheme
Edit `styles.css` and modify these colors:
```css
/* Primary color (operators) */
background: #667eea;

/* Success color (equals) */
background: #48bb78;

/* Error color (clear) */
background: #f56565;
```

### Adjust Button Size
Change padding values in `.btn` class:
```css
padding: 18px; /* Change this value */
```

### Modify Theme
Edit the gradient in `body` background:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🐛 Known Issues

- None currently! Report any issues on GitHub.

## 🔄 Updates & Improvements

Recent updates include:
- ✨ Full scientific calculator functions
- ✨ Dark mode with persistent theme
- ✨ Calculation history tracking
- ✨ Memory operations (M+, M-, MR, MC)
- ✨ Keyboard support
- ✨ Responsive mobile design
- ✨ Sound effects
- ✨ Better error handling

## 📈 Future Enhancements

- [ ] Currency converter
- [ ] Unit converter
- [ ] Statistics functions
- [ ] Expression evaluation (type entire equation)
- [ ] Export calculations as PDF
- [ ] More themes/color schemes

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rashi Yadav** (@codewithrashi07)

---

## 📞 Support

If you encounter any issues or have suggestions, please:
1. Check the [Issues](https://github.com/codewithrashi07/Simple-calculator.html/issues) page
2. Create a new issue with detailed description
3. Submit a pull request with improvements

---

**⭐ Don't forget to star this repository if you find it useful!**

Happy calculating! 🎉
