1| # 🧮 Advanced Calculator - Scientific Edition
2| 
3| > A **powerful, feature-rich web calculator** with scientific functions, dark mode, history tracking, and memory operations. Built with pure HTML5, CSS3, and Vanilla JavaScript - **no dependencies [...]
4| 
5| ![Version](https://img.shields.io/badge/Version-1.0.0-blue)
6| ![License](https://img.shields.io/badge/License-MIT-green)
7| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
8| ![Status](https://img.shields.io/badge/Status-Stable-brightgreen)
9| 
10| ---
11| 
12| ## 📖 Overview
13| 
14| **Advanced Calculator** started as a simple calculator project and evolved into a **professional-grade calculation tool**. Whether you're a student solving math problems, an engineer doing complex[...]
15| 
16| ### What Makes It Special? ✨
17| 
18| - 🔬 **Scientific Functions** - Not just +, −, ×, ÷
19| - 🌙 **Dark Mode** - Easy on the eyes, works anytime
20| - 📜 **History Tracking** - Never lose a calculation
21| - 💾 **Memory Functions** - M+, M-, MR, MC just like real calculators
22| - ⌨️ **Keyboard Support** - Type faster than clicking
23| - 📱 **Mobile Friendly** - Works on phone, tablet, desktop
24| - 🎨 **Beautiful UI** - Smooth animations & modern design
25| - ⚡ **Instant** - No loading, no lag, pure JavaScript magic!
26| 
27| ---
28| 
29| ## ✨ Features
30| 
31| ### 🎯 Core Features
32| 
33| | Feature | Description |
34| |---------|-------------|
35| | ➕ **Basic Arithmetic** | Addition, Subtraction, Multiplication, Division |
36| | 🔢 **Decimal Support** | Full decimal number precision |
37| | ⌫ **Backspace** | Delete last digit without clearing |
38| | 🔄 **Clear Display** | Reset calculator instantly |
39| | ✖️ **Sign Toggle** | Quickly negate numbers |
40| 
41| ### 🔬 Scientific Functions
42| 
43| **Advanced Math at Your Fingertips:**
44| 
45| ```
46| √x      - Square Root
47| x²      - Square any number
48| x³      - Cube any number  
49| x^y     - Power operations
50| sin/cos/tan - Trigonometry (in degrees)
51| log/ln  - Logarithmic functions
52| n!      - Factorial calculations
53| 1/x     - Reciprocal
54| |x|     - Absolute value
55| %       - Percentages
56| π       - Pi constant (3.14159...)
57| e       - Euler's number (2.71828...)
58| ```
59| 
60| ### 💾 Memory Functions
61| 
62| Keep your important values handy:
63| 
64| - **M+** - Add current value to memory
65| - **M−** - Subtract current value from memory  
66| - **MR** - Recall stored memory value
67| - **MC** - Clear memory
68| - **Memory Display** - See current memory value at a glance
69| 
70| ### 📜 Calculation History
71| 
72| Never forget a calculation:
73| 
74| - ✅ **Track Everything** - Stores up to 50 calculations
75| - ✅ **Time Stamps** - Know when you calculated
76| - ✅ **Quick Restore** - Click any history item to use result
77| - ✅ **Auto-Saved** - History persists even after refresh
78| - ✅ **One-Click Clear** - Delete all history anytime
79| 
80| ### 🎨 Theme System
81| 
82| **Two beautiful themes - choose what suits you:**
83| 
84| #### 🌙 Dark Mode
85| - Purple & dark colors
86| - Easy on the eyes at night
87| - Professional appearance
88| - Perfect for long sessions
89| 
90| #### ☀️ Light Mode  
91| - Purple gradient background
92| - Classic bright interface
93| - Great for daytime use
94| - High contrast for readability
95| 
96| **Auto-saves your preference!**
97| 
98| ### ⌨️ Full Keyboard Support
99| 
100| No mouse needed! Use keyboard shortcuts:
101| 
102| ```
103| 0-9         → Number input
104| +, -, *, /  → Operators
105| .           → Decimal point
106| Enter / =   → Calculate result
107| Backspace   → Delete last digit
108| Escape      → Clear display
109| ```
110| 
111| ### 📱 Responsive Design
112| 
113| Works perfectly on:
114| - 🖥️ **Desktop** - Full feature set
115| - 📱 **Mobile** - Touch-optimized buttons
116| - 📊 **Tablet** - Comfortable viewing
117| - 🌐 **All Browsers** - Chrome, Firefox, Safari, Edge
118| 
119| ---
120| 
121| ## 🚀 Getting Started
122| 
123| ### Option 1: Direct Usage (Recommended for Beginners)
124| 
125| 1. **Clone the repository:**
126|    ```bash
127|    git clone https://github.com/codewithrashi07/Simple-calculator.html.git
128|    cd Simple-calculator.html
129|    ```
130| 
131| 2. **Open in browser:**
132|    ```bash
133|    # macOS
134|    open index.html
135|    
136|    # Windows
137|    start index.html
138|    
139|    # Linux
140|    xdg-open index.html
141|    ```
142| 
143|    Or simply **double-click** `index.html` file!
144| 
145| ### Option 2: Live Demo
146| 
147| 🌐 **[Try Live Demo Here](https://codewithrashi07.github.io/Simple-calculator.html/)** ← Click to use the calculator online!
148| 
149| ### Option 3: Local Server
150| 
151| For best experience with local development:
152| 
153| ```bash
154| # Python 3
155| python -m http.server 8000
156| 
157| # Python 2
158| python -m SimpleHTTPServer 8000
159| 
160| # Then visit: http://localhost:8000
161| ```
162| 
163| ---
164| 
165| ## 📂 Project Structure
166| 
167| ```
168| Simple-calculator.html/
169| │
170| ├── 📄 index.html           # Main HTML file with calculator UI
171| ├── 🎨 styles.css           # Complete styling + dark mode
172| ├── 📜 script.js            # Full JavaScript functionality
173| ├── 📖 README.md            # Documentation (you are here!)
174| ├── 📋 CHANGELOG.md         # Version history & updates
175| ├── 📝 RELEASE_NOTES.md     # Detailed release info
176| ├── 🤝 CONTRIBUTING.md      # How to contribute
177| ├── 📦 package.json         # Project metadata
178| ├── 📜 LICENSE              # MIT License
179| └── 🚫 .gitignore           # Git ignore rules
180| ```
181| 
182| ### File Descriptions
183| 
184| | File | Purpose |
185| |------|---------|
186| | `index.html` | Structure & HTML markup |
187| | `styles.css` | All styling, animations, dark mode |
188| | `script.js` | Complete calculator logic & functions |
189| 
190| ---
191| 
192| ## 🛠️ Technologies Used
193| 
194| ### Frontend Technologies
195| 
196| - **HTML5** - Semantic markup, modern structure
197| - **CSS3** - Flexbox, Grid, animations, transitions
198| - **JavaScript (ES6+)** - Modern JavaScript features
199| - **Local Storage API** - Data persistence
200| 
201| ### No External Dependencies!
202| 
203| Pure vanilla JavaScript - everything works out of the box without npm, webpack, or build tools!
204| 
205| ### Browser Support
206| 
207| | Browser | Version | Support |
208| |---------|---------|---------|
209| | Chrome | Latest | ✅ Full Support |
210| | Firefox | Latest | ✅ Full Support |
211| | Safari | Latest | ✅ Full Support |
212| | Edge | Latest | ✅ Full Support |
213| | Mobile Browsers | Latest | ✅ Full Support |
214| 
215| ---
216| 
217| ## 📖 How to Use
218| 
219| ### Basic Calculations
220| 
221| ```
222| Example: 25 + 15
223| 1. Click "2" then "5"
224| 2. Click "+"
225| 3. Click "1" then "5"
226| 4. Click "=" 
227| Result: 40 ✅
228| ```
229| 
230| ### Scientific Mode
231| 
232| ```
233| Example: √16
234| 1. Click "Scientific" button
235| 2. Click "16"
236| 3. Click "√x" button
237| Result: 4 ✅
238| ```
239| 
240| ### Using History
241| 
242| ```
243| 1. Perform some calculations
244| 2. Click "📋 History" button
245| 3. History panel opens on right
246| 4. Click any previous calculation
247| 5. Result is restored to display
248| ```
249| 
250| ### Memory Operations
251| 
252| ```
253| Example: Store 100, add 50, recall
254| 1. Enter "100", click "M+" (stores 100)
255| 2. Enter "50", click "M+" (now memory = 150)
256| 3. Click "MR" (displays 150)
257| 4. Click "MC" (clears memory to 0)
258| ```
259| 
260| ### Theme Switching
261| 
262| ```
263| 1. Click 🌙 button (top-right)
264| 2. Calculator switches to dark mode
265| 3. Theme automatically saved
266| 4. Click again to switch back to light mode
267| ```
268| 
269| ---
270| 
271| ## ⌨️ Keyboard Shortcuts Reference
272| 
273| Perfect for power users:
274| 
275| ```
276| NUMBERS:        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
277| OPERATORS:      + (add)
278|                 - (subtract)
279|                 * (multiply)
280|                 / (divide)
281| SPECIAL:        . (decimal)
282|                 Enter or = (calculate)
283|                 Backspace (delete)
284|                 Escape (clear)
285| ```
286| 
287| ---
288| 
289| ## 🎨 Customization Guide
290| 
291| ### Change Button Colors
292| 
293| Edit `styles.css`:
294| 
295| ```css
296| /* Operator buttons color */
297| .btn.operator {
298|     background: #667eea;  /* Change this */
299| }
300| 
301| /* Equals button color */
302| .btn.equals {
303|     background: #48bb78;  /* Change this */
304| }
305| 
306| /* Clear button color */
307| .btn.clear {
308|     background: #f56565;  /* Change this */
309| }
310| ```
311| 
312| ### Modify Display Size
313| 
314| ```css
315| .current-operand {
316|     font-size: 2.5em;  /* Change this */
317| }
318| ```
319| 
320| ### Adjust Button Padding
321| 
322| ```css
323| .btn {
324|     padding: 18px;  /* Change this */
325| }
326| ```
327| 
328| ### Change Background Gradient
329| 
330| ```css
331| body {
332|     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
333|     /* Change colors above */
334| }
335| ```
336| 
337| ---
338| 
339| ## 🔍 Technical Highlights
340| 
341| ### Pure JavaScript - No Dependencies
342| 
343| ```javascript
344| // Everything is vanilla JS
345| // No jQuery, no libraries, no build tools
346| // Just pure, clean JavaScript code
347| ```
348| 
349| ### Local Storage Implementation
350| 
351| ```javascript
352| // Automatic saving of:
353| // - Theme preference (dark/light)
354| // - Calculation history
355| // - Memory value
356| // Data persists even after browser restart!
357| ```
358| 
359| ### Responsive Design
360| 
361| ```css
362| /* Mobile-first approach */
363| @media (max-width: 768px) { /* Tablet */ }
364| @media (max-width: 480px) { /* Mobile */ }
365| ```
366| 
367| ### Smooth Animations
368| 
369| ```css
370| /* Hover effects */
371| /* Button press animations */
372| /* Smooth transitions on theme toggle */
373| /* Beautiful gradient backgrounds */
374| ```
375| 
376| ---
377| 
378| ## 💡 Tips & Tricks
379| 
379| ### 🎯 Pro Tips
380| 
381| 1. **Type faster** - Use keyboard instead of clicking
382| 2. **Remember results** - Use history panel  
383| 3. **Save values** - Use memory functions (M+, M-, MR, MC)
384| 4. **Night mode** - Toggle dark mode with one click
385| 5. **Quick clear** - Press Escape key
386| 6. **Negative numbers** - Use +/− button or prefix with -
387| 
388| ### 🔧 Troubleshooting
389| 
390| **Calculator not working?**
391| - Refresh the page
392| - Check browser console (F12)
393| - Clear browser cache
394| - Try different browser
395| 
396| **History not saving?**
397| - Enable Local Storage in browser
398| - Check browser privacy settings
399| - Try private/incognito mode
400| 
401| **Dark mode not working?**
402| - Clear browser cache
403| - Check if JavaScript is enabled
404| - Try different browser
405| 
406| ---
407| 
408| ## 📊 Comparison: Before vs After
409| 
410| | Feature | v0.1.0 (Initial) | v1.0.0 (Current) |
411| |---------|------------------|------------------|
412| | Basic Operations | ✅ 4 functions | ✅ 20+ functions |
413| | Scientific Mode | ❌ No | ✅ Yes |
414| | Themes | ❌ 1 theme | ✅ Dark + Light |
415| | History | ❌ No | ✅ Full tracking |
416| | Memory | ❌ No | ✅ M+, M-, MR, MC |
417| | Keyboard Support | ❌ No | ✅ Full support |
418| | Mobile Responsive | ⚠️ Basic | ✅ Fully optimized |
419| | Sound Effects | ❌ No | ✅ Yes |
420| | Code Quality | ⚠️ Inline | ✅ Organized files |
421| | File Size | 10KB | 50KB (feature-rich) |
422| 
423| ---
424| 
425| ## 🐛 Known Issues
426| 
427| **Currently:** No known issues! 🎉
428| 
429| If you find a bug:
430| 1. Check [Issues](https://github.com/codewithrashi07/Simple-calculator.html/issues)
431| 2. Create a new issue with:
432|    - Browser & version
433|    - Steps to reproduce
434|    - Expected vs actual result
435|    - Screenshots (if applicable)
436| 
437| ---
438| 
439| ## 🚀 Future Roadmap
440| 
441| We're constantly improving! Planned features:
442| 
443| - [ ] 💱 **Currency Converter** - Real-time exchange rates
444| - [ ] 📏 **Unit Converter** - Length, weight, temperature
445| - [ ] 📊 **Statistics** - Mean, median, mode calculations
446| - [ ] 📝 **Expression Evaluation** - Type entire equations
447| - [ ] 📥 **Export to PDF** - Save calculations
448| - [ ] 🎨 **More Themes** - Additional color schemes
449| - [ ] 🎤 **Voice Input** - Speak calculations
450| - [ ] 💾 **Cloud Sync** - Save across devices
451| - [ ] 🌍 **Multi-Language** - Support for multiple languages
452| 
453| ---
454| 
455| ## 🤝 Contributing
456| 
457| We love contributions! Whether it's:
458| - 🐛 **Bug reports**
459| - ✨ **New features**  
460| - 📖 **Documentation improvements**
461| - 🎨 **Design enhancements**
462| - 🌍 **Translations**
463| 
464| See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
465| 
466| ---
467| 
468| ## 📜 License
469| 
470| This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.
471| 
472| ### What You Can Do:
473| ✅ Use it for personal projects  
474| ✅ Modify and customize  
475| ✅ Share with others  
476| ✅ Use in commercial projects  
477| 
478| ### What You Must Do:
479| 📝 Include the original license  
480| 📝 Give credit to the author  
481| 
482| ---
483| 
484| ## 👨‍💻 Author
485| 
486| **Rashi Yadav**
487| - GitHub: [@codewithrashi07](https://github.com/codewithrashi07)
488| - Email: rashiyadav684@gmail.com
489| - Portfolio: [Coming Soon]
490| 
491| ---
492| 
493| ## ⭐ Support This Project
494| 
495| If you find this calculator useful:
496| 
497| 1. **Star ⭐** - Give it a star on GitHub
498| 2. **Share 📢** - Tell your friends about it
499| 3. **Contribute 🤝** - Submit improvements
500| 4. **Report Issues 🐛** - Help us improve
501| 5. **Sponsor 💝** - Support the development
502| 
503| ---
504| 
505| ## 📞 Get Help
506| 
507| ### Documentation
508| - 📖 [README](README.md) - You are here!
509| - 📋 [CHANGELOG](CHANGELOG.md) - Version history
510| - 📝 [RELEASE_NOTES](RELEASE_NOTES.md) - Detailed release info
511| - 🤝 [CONTRIBUTING](CONTRIBUTING.md) - Contribution guide
512| 
513| ### Questions?
514| - 💬 [Open an Issue](https://github.com/codewithrashi07/Simple-calculator.html/issues)
515| - 💭 [Start a Discussion](https://github.com/codewithrashi07/Simple-calculator.html/discussions)
516| - 📧 Email: rashiyadav684@gmail.com
517| 
518| ---
519| 
520| ## 🎉 Changelog Highlights
521| 
522| ### v1.0.0 (Latest) 🚀
523| - ✨ Scientific calculator functions
524| - 🌙 Dark/Light theme system
525| - 📜 Calculation history tracking
526| - 💾 Memory functions
527| - ⌨️ Full keyboard support
528| - 📱 Responsive mobile design
529| - 🎨 Beautiful UI/UX
530| 
531| ### v0.1.0 (Initial)
532| - Basic calculator with 4 operations
533| 
534| ---
535| 
536| ## 🏆 Credits
537| 
538| Made with ❤️ and a lot of ☕ by **Rashi Yadav**
539| 
540| Special thanks to everyone who:
541| - Uses the calculator
542| - Reports bugs
543| - Suggests improvements
544| - Contributes code
545| - Shares with others
546| 
547| ---
548| 
549| ## 📊 Stats
550| 
551| ```
552| 💻 Lines of Code:     ~500
553| 🎨 CSS Rules:         ~300
554| 📜 JavaScript:        ~500
555| 📦 Total Size:        ~50KB
556| ⚡ Load Time:         <1s
557| 🌐 Browser Support:   99%+
558| 📱 Mobile Friendly:   ✅
559| ```
560| 
561| ---
562| 
563| ## 🎓 Learn From This Project
564| 
565| This calculator is great for learning:
566| 
567| - 📚 HTML5 semantic structure
568| - 🎨 Modern CSS (Grid, Flexbox, animations)
569| - 💻 JavaScript ES6+ features
570| - 🧠 Algorithm implementation
571| - 🎯 Event handling
572| - 💾 Local Storage API
573| - 📱 Responsive design
574| - 🌙 Dark mode implementation
575| 
576| ---
577| 
578| ## 🙏 Thank You!
579| 
580| Thanks for using **Advanced Calculator**! We hope it makes your calculations faster, easier, and more enjoyable.
581| 
582| **Happy Calculating!** 🧮✨
583| 
584| ---
585| 
586| <div align="center">
587| 
588| **⭐ If you like this project, please give it a star! ⭐**
589| 
590| [GitHub](https://github.com/codewithrashi07/Simple-calculator.html) • [Issues](https://github.com/codewithrashi07/Simple-calculator.html/issues) • [Discussions](https://github.com/codewithras[...]
591| 
592| </div>
