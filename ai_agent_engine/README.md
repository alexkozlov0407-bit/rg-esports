# 🚀 AI Agent Automated Monetization Engine (Zero Capital Edition)

Welcome to your complete automated AI outreach and monetization toolkit. Built specifically for your setup:
- **Google AI Pro (Gemini)**: Rapid prospect analysis + live demo LLM backend
- **Claude Pro**: Deliverable generation (ghostwriting, copy, scripts)
- **GitHub Student Developer Pack**: Free hosting (GitHub Pages, DigitalOcean $200 credits, Namecheap `.me` custom domain)

---

## 📁 What We Built For You

```
ai_agent_engine/
├── demo_app/
│   ├── index.html          # Standalone, interactive AI Receptionist demo (Deploy to GitHub Pages free!)
│   ├── app.py              # Full Python Gradio app (Deploy to Hugging Face Spaces free!)
│   └── requirements.txt    # Python dependencies
├── outreach_scripts/
│   └── outreach_generator.py # Python engine that creates tailored emails, DMs & spec-work
└── prospects/
    └── sample_campaigns.json # Pre-generated tailored campaigns ready to send
```

---

## ⚡ 1-Minute Launch: How to Run the Demo

### Option A: The Instant Browser Demo (Zero Python Needed)
Simply open `ai_agent_engine/demo_app/index.html` in your browser:
- It runs 100% locally with simulated instant conversational AI.
- Includes switches for **Emergency Plumbing/HVAC**, **Med-Spa/Dental**, and **Creator Content Engine**.
- To host it online for free: Push it to a GitHub repository and turn on **GitHub Pages**. You get a live link like `https://yourname.github.io/ai-receptionist`!

### Option B: The Hugging Face Python App
1. Install dependencies:
   ```bash
   pip install -r ai_agent_engine/demo_app/requirements.txt
   ```
2. (Optional) Set your Gemini API key:
   ```bash
   export GEMINI_API_KEY="your-free-key-from-aistudio.google.com"
   ```
3. Run:
   ```bash
   python ai_agent_engine/demo_app/app.py
   ```
4. Or create a free Space at [huggingface.co/spaces](https://huggingface.co/spaces) (select Gradio) and drag & drop `app.py` and `requirements.txt`.

---

## 🎯 How to Run Outreach in 3 Easy Steps

1. **Add new prospects**: Edit `PROSPECTS_DEFAULT` in `ai_agent_engine/outreach_scripts/outreach_generator.py` or load your own CSV.
2. **Run the generator**:
   ```bash
   python3 ai_agent_engine/outreach_scripts/outreach_generator.py
   ```
3. **Copy-paste your tailored outreach**:
   - Check `ai_agent_engine/prospects/sample_campaigns.json` for ready-to-send messages.
   - For **Twitter/X**: Send the 2-step DM.
   - For **Instagram**: Send the quick question about manual DM handling.
   - For **Email**: Send the "missed calls" cold email with your demo link.

---

## 💡 The Zero-Capital Daily Routine (15–20 Mins/Day)

| Time | Action | Expected Output |
|---|---|---|
| 5 mins | Search Google Maps or Twitter for 5 local service businesses or creators | 5 fresh leads |
| 5 mins | Run `outreach_generator.py` to produce customized hooks | 5 custom messages |
| 10 mins | Send 5 DMs or emails with the live demo link | 1–2 responses daily |
| **Weekly** | Follow up with interested replies, offer a 48-hr trial setup | **1–2 paying clients/month ($500–$1,000)** |
