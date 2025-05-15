# cPanel Deployment Instructions

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
   ```
   cd ~/public_html
   ```
3. Install production dependencies:
   ```
   npm install --production
   ```

## 4. Start Your Application

1. In cPanel's "Setup Node.js App", start your application
2. Or run the startup script:
   ```
   chmod +x cpanel-startup.sh
   ./cpanel-startup.sh
   ```

## 5. Test Your Site

Visit your domain to confirm everything is working properly.

## 6. Troubleshooting

Check the Node.js logs in:
- cPanel's "Errors" section
- ~/logs/nodejs.log
