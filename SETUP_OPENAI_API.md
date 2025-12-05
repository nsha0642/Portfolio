# Setup Instructions for Ask Me AI Agent

## Prerequisites
You need an OpenAI API key to use the Ask Me AI agent feature.

## Steps to Get Your OpenAI API Key:

1. **Visit OpenAI Website**: Go to https://platform.openai.com/account/api-keys
2. **Sign In**: Log in with your OpenAI account (or create one if you don't have one)
3. **Create API Key**: Click on "Create new secret key"
4. **Copy the Key**: Copy the generated API key (you won't be able to see it again)

## Steps to Add API Key to Your Project:

1. Open the file: `backend/.env`
2. Replace the placeholder with your actual API key:
   ```
   OPENAI_API_KEY=sk-proj-YOUR_ACTUAL_API_KEY_HERE
   ```
3. Save the file

**⚠️ IMPORTANT**: Never commit or push your actual API key to version control. The `.env` file is already in `.gitignore` to prevent accidental commits.

## Testing the AI Agent:

1. Make sure the backend is running (FastAPI on http://127.0.0.1:8000)
2. Navigate to the "Ask Me" section in your portfolio
3. Ask a question like:
   - "What is my email?"
   - "What is my CGPA?"
   - "Tell me about your experience"
   - "What skills do you have?"

The AI agent should now respond with information from your resume!

## Security Note:
- **NEVER** commit the `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Keep your API key private and secure
