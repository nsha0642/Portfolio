# AI Portfolio - Ask Me Agent Setup & Troubleshooting

## ✅ What Has Been Fixed

1. **Enhanced Guardrails** - The AI agent now has strict safeguards against hallucination
2. **Better Error Logging** - Frontend now shows detailed error messages
3. **Simplified Context Matching** - Keywords optimized for email, CGPA, and contact info
4. **Response Validation** - Backend validates responses to ensure they match resume facts
5. **Improved Error Handling** - Clear error messages if something goes wrong

## 🚀 Quick Start

### Option 1: Manual Start (Recommended)

**Terminal 1 - Start Backend:**
```powershell
C:\Users\snish\AppData\Local\Programs\Python\Python313\python.exe -m uvicorn backend.main:app --reload
```

**Terminal 2 - Start Frontend:**
```powershell
$env:Path += ";C:\Program Files\nodejs"; npm start
```

### Option 2: Automated Start (One-Click)
```powershell
.\restart.ps1
```

## 📋 What You Need to Do

### 1. Verify OpenAI API Key
Make sure `backend/.env` has your API key:
```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

### 2. Check Both Services Are Running
- **Backend**: http://127.0.0.1:8000/health (should return `{"status":"ok"}`)
- **Frontend**: http://localhost:3000 (should load your portfolio)

### 3. Test the AI Agent
- Navigate to "Ask Me" in navbar
- Try asking:
  - "What is my email?"
  - "What is my CGPA?"
  - "Tell me about your experience"

## 🔍 Troubleshooting

### Issue: "Sending..." stays frozen

**Cause**: Backend is not running or not responding

**Solution**:
1. Check if backend terminal shows errors
2. Verify API key is correctly set in `backend/.env`
3. Restart backend with:
   ```powershell
   C:\Users\snish\AppData\Local\Programs\Python\Python313\python.exe -m uvicorn backend.main:app --reload
   ```
4. Check browser console (F12) for network errors

### Issue: Backend starts but gives errors

**Cause**: Missing dependencies or API key issue

**Solution**:
```powershell
# Install/update dependencies
C:\Users\snish\AppData\Local\Programs\Python\Python313\python.exe -m pip install --upgrade openai python-dotenv fastapi uvicorn

# Verify API key is set
$env:OPENAI_API_KEY | Out-String
```

### Issue: Frontend doesn't connect to backend

**Cause**: Node.js PATH not set

**Solution**:
```powershell
# Add to PATH manually
$env:Path += ";C:\Program Files\nodejs"
npm start
```

### Issue: "API Error: 401" or "Invalid API key"

**Cause**: OpenAI API key is invalid, expired, or not set

**Solution**:
1. Visit https://platform.openai.com/account/api-keys
2. Create a new API key
3. Update `backend/.env` with the new key
4. Restart backend

## 📝 Files Modified/Created

- ✅ `backend/services/ai_agent.py` - Enhanced with guardrails & validation
- ✅ `backend/main.py` - Added dotenv loading
- ✅ `src/Components/AskMe/AskMe.js` - Improved error handling & logging
- ✅ `backend/.env` - Configuration file (with your API key)
- ✅ `.gitignore` - Added .env for security
- ✅ `restart.ps1` - One-click restart script

## 🛡️ Safety Features

The AI agent now includes:
- **Zero Temperature** - Deterministic, factual responses only
- **Context Validation** - Ensures responses are based on resume facts
- **Jailbreak Detection** - Blocks prompt injection attempts
- **Response Checking** - Validates that responses match context
- **Error Handling** - Clear messages when something fails

## 🎯 How It Works

1. User asks a question in the "Ask Me" section
2. Frontend sends question to backend at `http://127.0.0.1:8000/api/ask-me`
3. Backend:
   - Checks if question is valid (not a jailbreak)
   - Matches keywords to find relevant resume sections
   - Sends context + question to OpenAI with strict guardrails
   - Validates response to prevent hallucination
   - Returns answer to frontend
4. Frontend displays the response in the chat

## 💡 Example Questions

- "What is my email address?"
- "What is my CGPA from SRM?"
- "Tell me about your work at Infosys"
- "What skills do you have?"
- "Where are you located?"
- "What is your experience?"
- "Tell me about the CoWrks project"

## 📞 Support

If you encounter issues:
1. Check the browser console (F12 → Console tab)
2. Check the backend terminal for error messages
3. Verify all services are running
4. Ensure your OpenAI API key is valid and has quota

---

**Status**: ✅ System Ready
**Last Updated**: December 3, 2025
