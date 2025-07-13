# Google OAuth Setup Guide

This guide explains how to set up Google OAuth authentication for the AI Resume Job Matcher application.

## Prerequisites

1. A Google Cloud Platform (GCP) account
2. Node.js and npm installed
3. The frontend application running

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your project ID

## Step 2: Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API" and enable it
3. Also enable "Google OAuth2 API" if available

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Configure the OAuth consent screen first if prompted:
   - Choose "External" for testing
   - Fill in required fields (App name, User support email, Developer contact)
   - Add test users if needed
4. Create OAuth 2.0 Client ID:
   - Application type: "Web application"
   - Name: "AI Resume Job Matcher"
   - Authorized JavaScript origins:
     - `http://localhost:3000` (for development)
     - Your production domain (when deployed)
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - Your production domain callback URL

## Step 4: Install Required Packages

Due to PowerShell execution policy restrictions, you may need to run these commands in Command Prompt or enable PowerShell scripts:

```bash
# Navigate to frontend directory
cd frontend

# Install required packages
npm install next-auth @auth/google-provider

# Or using yarn
yarn add next-auth @auth/google-provider
```

## Step 5: Environment Configuration

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Google OAuth credentials:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_random_secret_here
   ```

   To generate a random secret for NEXTAUTH_SECRET:
   ```bash
   # On Linux/Mac:
   openssl rand -base64 32
   
   # On Windows:
   # Use an online generator or create a random 32-character string
   ```

## Step 6: Update NextAuth Configuration

The NextAuth configuration is already set up in `/src/app/api/auth/[...nextauth]/route.ts`. 

Make sure to update the file if you need custom callbacks or additional providers.

## Step 7: Testing the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/signin`
3. Click the "Google" button
4. You should be redirected to Google's OAuth flow
5. After authentication, you'll be redirected back to your app

## Current Implementation Status

✅ **Completed:**
- Sign-in page with Google OAuth button
- OAuth flow handling
- TypeScript type declarations
- Error handling and loading states
- Form validation for email/password signin
- Responsive design

🔄 **In Progress:**
- Google OAuth script loading
- Token handling and user session management

⏳ **Next Steps:**
1. Install the required npm packages
2. Set up Google Cloud credentials
3. Configure environment variables
4. Test the OAuth flow
5. Implement user session management
6. Connect with backend authentication API

## Troubleshooting

### Common Issues:

1. **PowerShell Execution Policy Error:**
   - Run PowerShell as Administrator
   - Execute: `Set-ExecutionPolicy RemoteSigned`
   - Or use Command Prompt instead

2. **Google OAuth Not Working:**
   - Check that your domain is added to authorized origins
   - Verify environment variables are correctly set
   - Ensure Google+ API is enabled in GCP console

3. **CORS Errors:**
   - Make sure localhost:3000 is in authorized JavaScript origins
   - Check that the redirect URI matches exactly

4. **Environment Variables Not Loading:**
   - Restart the development server after changing .env.local
   - Make sure the file is named exactly `.env.local`
   - Check that variables start with `NEXT_PUBLIC_` for client-side access

## Security Considerations

- Never commit your `.env.local` file to version control
- Use different credentials for development and production
- Regularly rotate your client secrets
- Implement proper token validation on your backend
- Use HTTPS in production

## Production Deployment

When deploying to production:

1. Update authorized origins and redirect URIs in Google Console
2. Set environment variables in your hosting platform
3. Use HTTPS for all OAuth flows
4. Configure proper domain verification

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth 2.0 Guide](https://developers.google.com/identity/protocols/oauth2)
- [Google Cloud Console](https://console.cloud.google.com/)
