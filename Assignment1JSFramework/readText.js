const fs = require('fs');

// Read file asynchronously
fs.readFile('news.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    console.log('Paragraph from file:\n', data);
});
