document.addEventListener('DOMContentLoaded', () => {
    const textEditor = document.getElementById('text-editor');
    const fontFamilySelector = document.getElementById('font-family');
    const fontWeightSelector = document.getElementById('font-weight');
    const italicToggle = document.getElementById('italic-toggle');
    const saveBtn = document.getElementById('save-btn');
    const resetBtn = document.getElementById('reset-btn');
    const fonts = {
        "Arial": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Courier New": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Georgia": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Times New Roman": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Verdana": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Roboto": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Lato":  [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Montserrat": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Open Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Poppins": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Oswald": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Raleway": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Roboto Slab": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Merriweather": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Ubuntu": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Playfair Display": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Source Sans Pro": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Droid Serif": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "PT Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Noto Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Quicksand": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        "Exo": [100, 200, 300, 400, 500, 600, 700, 800, 900],

        
    };
    const updateFontWeights = () => {
        const selectedFont = fontFamilySelector.value;
        const weightSelector = fontWeightSelector;
        const weights = fonts[selectedFont] || [];
        weightSelector.innerHTML = '';
        weights.forEach(weight => {
            const option = document.createElement('option');
            option.value = weight;
            option.textContent = weight;
            weightSelector.appendChild(option);
        });
    };
    const applyFontSettings = () => {
        const fontFamily = fontFamilySelector.value;
        const fontWeight = fontWeightSelector.value;
        const isItalic = italicToggle.checked;

        textEditor.style.fontFamily = fontFamily;
        textEditor.style.fontWeight = fontWeight;
        textEditor.style.fontStyle = isItalic ? 'italic' : 'normal';

        localStorage.setItem('text', textEditor.value);
        localStorage.setItem('fontFamily', fontFamily);
        localStorage.setItem('fontWeight', fontWeight);
        localStorage.setItem('isItalic', isItalic);
    };
    fontFamilySelector.addEventListener('change', () => {
        updateFontWeights();
        applyFontSettings();
    });
    fontWeightSelector.addEventListener('change', applyFontSettings);
    italicToggle.addEventListener('change', applyFontSettings);

    saveBtn.addEventListener('click', () => {
        localStorage.setItem('text', textEditor.value);
        alert('Text and settings saved.');
    });

    resetBtn.addEventListener('click', () => {
        textEditor.value = '';
        fontFamilySelector.value = 'Arial';
        fontWeightSelector.value = '400';
        italicToggle.checked = false;

        applyFontSettings();
        alert('Editor reset to default settings.');
    });

    const savedFontFamily = localStorage.getItem('fontFamily') || 'Arial';
    const savedFontWeight = localStorage.getItem('fontWeight') || '400';
    const savedIsItalic = localStorage.getItem('isItalic') === 'true';

    fontFamilySelector.value = savedFontFamily;
    fontWeightSelector.value = savedFontWeight;
    italicToggle.checked = savedIsItalic;

    updateFontWeights();
    applyFontSettings();
});
