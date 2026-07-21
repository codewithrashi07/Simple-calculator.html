// ============================================
// ENHANCED CALCULATOR - JavaScript
// ============================================

// DOM Elements
const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');
const historyPanel = document.getElementById('historyPanel');
const historyList = document.getElementById('historyList');
const memoryDisplay = document.getElementById('memoryDisplay');
const themeToggle = document.getElementById('themeToggle');
const historyToggle = document.getElementById('historyToggle');
const modeBtns = document.querySelectorAll('.mode-btn');
const basicMode = document.querySelector('.buttons.basic-mode');
const scientificMode = document.querySelector('.buttons.scientific-mode');
const clickSound = document.getElementById('clickSound');

// Calculator State
let currentOperand = '0';
let previousOperand = '';
let operation = null;
let shouldResetDisplay = false;
let memory = 0;
let history = [];
let currentMode = 'basic';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadHistory();
    setupEventListeners();
});

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Mode switching
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // History toggle
    historyToggle.addEventListener('click', toggleHistory);

    // Keyboard support
    document.addEventListener('keydown', handleKeyboard);
}

// ============================================
// KEYBOARD SUPPORT
// ============================================
function handleKeyboard(e) {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
    if (e.key === '.') appendDecimal();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        e.preventDefault();
        appendOperator(e.key);
    }
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    }
    if (e.key === 'Escape') clearDisplay();
    if (e.key === 'Backspace') backspace();
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================
function updateDisplay() {
    currentOperandElement.innerText = formatDisplay(currentOperand);
    if (operation != null) {
        previousOperandElement.innerText = `${formatDisplay(previousOperand)} ${operation}`;
    } else {
        previousOperandElement.innerText = '';
    }
}

function formatDisplay(value) {
    const stringNumber = value.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay;
    }
}

// ============================================
// BASIC OPERATIONS
// ============================================
function appendNumber(number) {
    playSound();
    if (number === '0' && currentOperand === '0') return;
    if (shouldResetDisplay) {
        currentOperand = number.toString();
        shouldResetDisplay = false;
    } else {
        currentOperand = currentOperand === '0' ? number.toString() : currentOperand.toString() + number.toString();
    }
    updateDisplay();
}

function appendDecimal() {
    playSound();
    if (shouldResetDisplay) {
        currentOperand = '0.';
        shouldResetDisplay = false;
    } else if (currentOperand.indexOf('.') === -1) {
        currentOperand += '.';
    }
    updateDisplay();
}

function backspace() {
    playSound();
    if (shouldResetDisplay) return;
    if (currentOperand.length === 1) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.toString().slice(0, -1);
    }
    updateDisplay();
}

function toggleSign() {
    playSound();
    currentOperand = (parseFloat(currentOperand) * -1).toString();
    updateDisplay();
}

function appendOperator(op) {
    playSound();
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function calculate() {
    playSound();
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = current === 0 ? 0 : prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    const expression = `${formatDisplay(previousOperand)} ${operation} ${formatDisplay(current)}`;
    addToHistory(expression, computation);
    currentOperand = computation.toString();
    operation = null;
    previousOperand = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    playSound();
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// ============================================
// SCIENTIFIC FUNCTIONS
// ============================================
function scientificFunction(func) {
    playSound();
    const current = parseFloat(currentOperand);
    let result;

    switch (func) {
        case 'sqrt':
            result = Math.sqrt(current);
            break;
        case 'square':
            result = current * current;
            break;
        case 'cube':
            result = current * current * current;
            break;
        case 'sin':
            result = Math.sin((current * Math.PI) / 180);
            break;
        case 'cos':
            result = Math.cos((current * Math.PI) / 180);
            break;
        case 'tan':
            result = Math.tan((current * Math.PI) / 180);
            break;
        case 'log':
            result = Math.log10(current);
            break;
        case 'ln':
            result = Math.log(current);
            break;
        case 'pi':
            result = Math.PI;
            break;
        case 'e':
            result = Math.E;
            break;
        case '1/x':
            result = 1 / current;
            break;
        case 'abs':
            result = Math.abs(current);
            break;
        case 'pow':
            operation = '^';
            previousOperand = currentOperand;
            currentOperand = '';
            updateDisplay();
            return;
        case 'factorial':
            result = factorial(current);
            break;
        default:
            return;
    }

    const expression = `${func}(${formatDisplay(current)})`;
    addToHistory(expression, result);
    currentOperand = result.toString();
    shouldResetDisplay = true;
    updateDisplay();
}

function factorial(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// ============================================
// MEMORY FUNCTIONS
// ============================================
function memoryAdd() {
    playSound();
    memory += parseFloat(currentOperand) || 0;
    updateMemoryDisplay();
    saveMemory();
}

function memorySubtract() {
    playSound();
    memory -= parseFloat(currentOperand) || 0;
    updateMemoryDisplay();
    saveMemory();
}

function memoryRecall() {
    playSound();
    currentOperand = memory.toString();
    shouldResetDisplay = true;
    updateDisplay();
}

function memoryClear() {
    playSound();
    memory = 0;
    updateMemoryDisplay();
    saveMemory();
}

function updateMemoryDisplay() {
    if (memory !== 0) {
        memoryDisplay.innerText = `M: ${formatDisplay(memory)}`;
    } else {
        memoryDisplay.innerText = '';
    }
}

// ============================================
// HISTORY FUNCTIONS
// ============================================
function addToHistory(expression, result) {
    history.unshift({
        expression: expression,
        result: result,
        timestamp: new Date().toLocaleTimeString()
    });
    if (history.length > 50) history.pop();
    updateHistoryDisplay();
    saveHistory();
}

function updateHistoryDisplay() {
    if (history.length === 0) {
        historyList.innerHTML = '<p class="no-history">No calculations yet</p>';
        return;
    }

    historyList.innerHTML = history.map((item, index) => `
        <div class="history-item" onclick="restoreFromHistory(${index})">
            <div>
                <div class="history-expression">${item.expression}</div>
                <small style="color: #999;">${item.timestamp}</small>
            </div>
            <div class="history-result">${formatDisplay(item.result)}</div>
        </div>
    `).join('');
}

function restoreFromHistory(index) {
    currentOperand = history[index].result.toString();
    shouldResetDisplay = true;
    updateDisplay();
}

function clearHistory() {
    if (confirm('Are you sure you want to clear history?')) {
        history = [];
        updateHistoryDisplay();
        saveHistory();
    }
}

function toggleHistory() {
    historyPanel.classList.toggle('hidden');
}

// ============================================
// MODE SWITCHING
// ============================================
function switchMode(mode) {
    playSound();
    currentMode = mode;
    modeBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (mode === 'basic') {
        basicMode.classList.remove('hidden');
        scientificMode.classList.add('hidden');
    } else {
        basicMode.classList.add('hidden');
        scientificMode.classList.remove('hidden');
    }
}

// ============================================
// THEME FUNCTIONS
// ============================================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    saveTheme();
    updateThemeIcon();
}

function updateThemeIcon() {
    themeToggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon();
}

function saveTheme() {
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// ============================================
// LOCAL STORAGE FUNCTIONS
// ============================================
function saveHistory() {
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
}

function loadHistory() {
    const saved = localStorage.getItem('calculatorHistory');
    if (saved) {
        history = JSON.parse(saved);
        updateHistoryDisplay();
    }
}

function saveMemory() {
    localStorage.setItem('calculatorMemory', memory.toString());
}

function loadMemory() {
    const saved = localStorage.getItem('calculatorMemory');
    if (saved) {
        memory = parseFloat(saved);
        updateMemoryDisplay();
    }
}

// ============================================
// SOUND EFFECTS
// ============================================
function playSound() {
    try {
        const sound = new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
        sound.volume = 0.1;
        sound.play().catch(e => console.log('Sound play failed:', e));
    } catch (e) {
        // Sound not supported
    }
}

// Initialize display
updateDisplay();
loadMemory();