const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create deployment folder
const deployDir = path.join(__dirname, 'deploy');
if (!fs.existsSync(deployDir)) {
  fs.mkdirSync(deployDir);
}

console.log('🚀 Building Next.js project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}

// Files and directories to copy
const filesToCopy = [
  '.next',
  'public',
  'package.json',
  'package-lock.json',
  'next.config.js',
  '.htaccess',
  'server.js',
];

console.log('📦 Copying deployment files...');
filesToCopy.forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(deployDir, file);
  
  if (fs.existsSync(srcPath)) {
    if (fs.lstatSync(srcPath).isDirectory()) {
      execSync(`xcopy "${srcPath}" "${destPath}" /E /I /H /Y`);
    } else {
      execSync(`copy "${srcPath}" "${destPath}" /Y`);
    }
  } else {
    console.warn(`⚠️ Warning: ${file} not found, skipping...`);
  }
});

// Create package.json with only production dependencies
console.log('📝 Creating production package.json...');
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));

// Keep only necessary sections for production
const prodPackage = {
  name: packageJson.name,
  version: packageJson.version,
  private: packageJson.private,
  scripts: {
    start: packageJson.scripts.start,
  },
  dependencies: packageJson.dependencies,
};

fs.writeFileSync(
  path.join(deployDir, 'package.json'), 
  JSON.stringify(prodPackage, null, 2)
);

// Create cPanel startup script
console.log('🛠️ Creating cPanel startup file...');
const startupContent = `
#!/bin/bash
export NODE_ENV=production
export PORT=3000

# Kill any existing Node.js processes
pkill -f node || true

# Start the Next.js server using server.js
cd $HOME/public_html
node server.js > $HOME/logs/nodejs.log 2>&1 &
`;

fs.writeFileSync(path.join(deployDir, 'cpanel-startup.sh'), startupContent);
execSync(`attrib +x "${path.join(deployDir, 'cpanel-startup.sh')}"`);

// Create readme with deployment instructions
console.log('📄 Creating deployment instructions...');
const readmeContent = `# cPanel Deployment Instructions

## 1. Upload Files

1. Zip the contents of this 'deploy' folder
2. Upload the zip file to your cPanel file manager in the 'public_html' directory
3. Extract the zip file in that location

## 2. Set Up Node.js App

1. In cPanel, go to "Setup Node.js App"
2. Click "Create Application"
3. Set the following:
   - Node.js version: 18.x or higher
   - Application mode: Production
   - Application root: public_html
   - Application URL: your-domain.com
   - Application startup file: server.js

## 3. Install Dependencies

1. In cPanel, access the Terminal
2. Navigate to your public_html directory:
   \`\`\`
   cd ~/public_html
   \`\`\`
3. Install production dependencies:
   \`\`\`
   npm install --production
   \`\`\`

## 4. Start Your Application

1. In cPanel's "Setup Node.js App", start your application
2. Or run the startup script:
   \`\`\`
   chmod +x cpanel-startup.sh
   ./cpanel-startup.sh
   \`\`\`

## 5. Test Your Site

Visit your domain to confirm everything is working properly.

## 6. Troubleshooting

Check the Node.js logs in:
- cPanel's "Errors" section
- ~/logs/nodejs.log
`;

fs.writeFileSync(path.join(deployDir, 'README.md'), readmeContent);

console.log('✅ Deployment package ready! Check the "deploy" folder.');
console.log('📝 Follow the instructions in deploy/README.md for cPanel deployment.');
