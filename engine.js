class VisualNovelEngine {
    constructor(jsonFile) {
        this.jsonData = null;
        this.currentScene = null;
        this.currentDialogueIndex = 0;
        this.defaultLanguage = 'en'; // Set a default language
        this.variables = {}; // Initialize variables

        // Get DOM elements
        this.background = document.getElementById('background');
        this.character = document.getElementById('character');
        this.nameBox = document.getElementById('name-box');
        this.dialogueBox = document.getElementById('dialogue-box');
        this.nextButton = document.getElementById('next-button');

        // Load JSON data
        this.loadJSON(jsonFile);

        // Bind event listener for the next button
        this.nextButton.addEventListener('click', () => this.nextDialogue());
    }

    loadJSON(jsonFile) {
        fetch(jsonFile)
            .then(response => response.json())
            .then(data => {
                this.jsonData = data;
                this.currentScene = this.jsonData.settings.launch_story;
                this.variables = this.jsonData.variables || {}; // Load variables if they exist
                this.defaultLanguage = this.jsonData.settings.default_language || 'en'; // Load default language if set
            })
            .catch(error => console.error('Error loading JSON:', error));
    }

    start() {
        if (!this.jsonData) {
            console.error('JSON data not loaded.');
            return;
        }
        this.renderScene();
    }

    renderScene() {
        const sceneData = this.jsonData.scenes[this.currentScene];

        // Update background
        if (sceneData.background.type === 'image') {
            this.background.style.backgroundImage = `url(${sceneData.background.source})`;
        } else {
            this.background.style.backgroundColor = sceneData.background.source;
        }

        this.currentDialogueIndex = 0;
        this.displayDialogue();
    }

    displayDialogue() {
        const sceneData = this.jsonData.scenes[this.currentScene];
        if (this.currentDialogueIndex >= sceneData.dialogues.length) {
            // End of scene or handle choices, etc.
            if (sceneData.dialogues[this.currentDialogueIndex -1].next_scene) {
                this.currentScene = sceneData.dialogues[this.currentDialogueIndex - 1].next_scene;
                this.renderScene();
            }
            return;
        }

        const dialogue = sceneData.dialogues[this.currentDialogueIndex];
        const character = this.jsonData.characters[dialogue.character];

        // Update character image
        if (character && character.default_image) {
            this.character.innerHTML = `<img src="${character.default_image}" alt="${dialogue.character}">`;
        } else {
            this.character.innerHTML = ''; // Clear character image
        }

        // Update name box
        this.nameBox.textContent = character ? character.name[this.defaultLanguage] : '';

        // Update dialogue text
        this.dialogueBox.textContent = dialogue.text[this.defaultLanguage];
    }

    nextDialogue() {
        this.currentDialogueIndex++;
        this.displayDialogue();
    }
}
