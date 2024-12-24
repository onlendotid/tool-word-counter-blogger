let inputTextArea = document.getElementById('inputText');
  let wordCountDisplay = document.getElementById('wordCount');

  let history = [];
  let currentHistoryIndex = -1;

  function updateWordCount() {
    const text = inputTextArea.value;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    wordCountDisplay.innerText = wordCount;
  }

  function saveToHistory() {
    // Save current state to history stack
    history.push(inputTextArea.value);
    currentHistoryIndex++;
  }

  function undo() {
    if (currentHistoryIndex > 0) {
      currentHistoryIndex--;
      inputTextArea.value = history[currentHistoryIndex];
      updateWordCount();
    }
  }

  function redo() {
    if (currentHistoryIndex < history.length - 1) {
      currentHistoryIndex++;
      inputTextArea.value = history[currentHistoryIndex];
      updateWordCount();
    }
  }

  function clearText() {
    inputTextArea.value = '';
    updateWordCount();
    history = [];
    currentHistoryIndex = -1;
  }

  inputTextArea.addEventListener('input', function () {
    // Save state to history on every change
    saveToHistory();
    updateWordCount();
  });

  // Initialize with an empty input
  updateWordCount();
