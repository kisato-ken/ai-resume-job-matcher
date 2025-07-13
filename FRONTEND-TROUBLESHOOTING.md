# Frontend Troubleshooting Guide

## Issue: Frontend Opening and Closing Rapidly

This usually happens due to npm/Next.js startup issues. Here are several solutions:

## Solution 1: Use the Simple Starter (Recommended)

**Double-click: `start-frontend-simple.bat`**

This script:
- Installs dependencies properly
- Uses a more stable Next.js startup method
- Provides better error messages

## Solution 2: Manual Command Line (Most Reliable)

1. **Open Command Prompt** (not PowerShell)
2. **Navigate to frontend directory:**
   ```cmd
   cd D:\ai-resume-job-matcher\frontend
   ```
3. **Install dependencies:**
   ```cmd
   npm install
   ```
4. **Start the server:**
   ```cmd
   npm run dev
   ```
   
   **If that fails, try:**
   ```cmd
   npx next dev
   ```

## Solution 3: Run Diagnostic First

**Double-click: `diagnose-frontend.bat`**

This will check:
- Node.js installation
- npm functionality
- Package.json validity
- Dependencies status
- Next.js configuration

## Solution 4: Fix Common Issues

### Clear npm cache:
```cmd
cd frontend
npm cache clean --force
npm install
```

### Delete and reinstall node_modules:
```cmd
cd frontend
rmdir /s node_modules
del package-lock.json
npm install
```

### Use alternative Next.js startup:
```cmd
cd frontend
npx next dev --no-turbopack
```

## Solution 5: Check for Port Conflicts

If port 3000 is busy:
```cmd
cd frontend
npx next dev -p 3001
```

Then access at: http://localhost:3001

## Expected Success Output

When frontend starts correctly, you should see:
```
▲ Next.js 15.3.4
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Starting...
✓ Ready in 2.3s
```

## Browser Access

Once started successfully:
- **Main App**: http://localhost:3000
- **Backend API**: http://localhost:8000 (must be running)
- **API Docs**: http://localhost:8000/docs

## Common Error Solutions

### "Cannot find module 'next'"
- Run: `npm install next react react-dom`

### "Port 3000 is already in use"
- Use: `npx next dev -p 3001`
- Or kill existing process

### "ENOENT: no such file or directory"
- Make sure you're in the frontend directory
- Run: `npm install` first

### TypeScript errors
- Run: `npm run build` to check for build issues
- Check that all components are properly imported

## Alternative: Use VS Code

1. **Open project in VS Code**
2. **Open terminal in VS Code** (Ctrl+`)
3. **Navigate to frontend:**
   ```cmd
   cd frontend
   ```
4. **Run:**
   ```cmd
   npm run dev
   ```

## Need Help?

If none of these work:
1. Check Node.js version: `node --version` (should be 18+)
2. Check npm version: `npm --version`
3. Try running the diagnostic script
4. Share any error messages you see
