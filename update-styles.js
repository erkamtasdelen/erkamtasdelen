const fs = require('fs');
const path = require('path');

// Güncellenecek renk sınıfları 
const replacements = [
  { find: 'text-apple-dark', replace: 'text-apple-dark' },
  { find: 'bg-apple-dark', replace: 'bg-apple-dark' },
  { find: 'text-apple-blue', replace: 'text-apple-blue' },
  { find: 'bg-apple-blue', replace: 'bg-apple-blue' },
  { find: 'bg-apple-blue/10', replace: 'bg-apple-blue/10' },
  { find: 'focus:ring-apple-blue', replace: 'focus:ring-apple-blue' },
  { find: 'focus:border-apple-blue', replace: 'focus:border-apple-blue' },
  { find: 'border-apple-blue', replace: 'border-apple-blue' },
  { find: 'text-apple-gray', replace: 'text-apple-gray' },
  { find: 'bg-apple-gray', replace: 'bg-apple-gray' },
  { find: 'bg-apple-gray/50', replace: 'bg-apple-gray/50' },
  { find: 'bg-apple-gray/80', replace: 'bg-apple-gray/80' },
  { find: 'hover:text-apple-blue', replace: 'hover:text-apple-blue' },
  { find: 'hover:bg-apple-gray/50', replace: 'hover:bg-apple-gray/50' },
];

// Güncellenecek dosyalar
const componentsDir = path.join(__dirname, 'src', 'components');
const cssFile = path.join(__dirname, 'src', 'app', 'globals.css');

// Bileşen dosyalarını güncelle
fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    replacements.forEach(({ find, replace }) => {
      content = content.replace(new RegExp(find, 'g'), replace);
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  }
});

// globals.css dosyasını güncelle
let cssContent = fs.readFileSync(cssFile, 'utf8');
// text-apple-dark gibi referansları güncelle
cssContent = cssContent.replace(/text-apple-dark/g, 'text-apple-dark');
cssContent = cssContent.replace(/ring-apple-blue/g, 'ring-apple-blue');
fs.writeFileSync(cssFile, cssContent);
console.log('Updated: globals.css');

console.log('All files updated successfully!'); 