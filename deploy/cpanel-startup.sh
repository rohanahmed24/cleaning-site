
#!/bin/bash
export NODE_ENV=production
export PORT=3000

# Kill any existing Node.js processes
pkill -f node || true

# Start the Next.js server using server.js
cd $HOME/public_html
node server.js > $HOME/logs/nodejs.log 2>&1 &
