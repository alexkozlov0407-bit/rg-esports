"""
AI Receptionist & Booking Agent Demo
Built for Hugging Face Spaces (Gradio) or local demo.
Zero-cost, powered by Google Gemini API (with smart fallback simulator).
"""

import os
import gradio as gr
from datetime import datetime

# Optional Google Generative AI integration
GEMINI_AVAILABLE = False
try:
    import google.generativeai as genai
    api_key = os.environ.get("GEMINI_API_KEY", "")
    if api_key:
        genai.configure(api_key=api_key)
        GEMINI_AVAILABLE = True
except Exception:
    GEMINI_AVAILABLE = False

NICHE_PROMPTS = {
    "Emergency Plumbing & HVAC": {
        "system": """You are Alex, the friendly 24/7 AI Receptionist for Apex Plumbing & HVAC.
Your goals:
1. Greet the customer warmly and ask what issue they are experiencing.
2. If it's an emergency (burst pipe, active water leak, AC down in 100-degree heat), treat with immediate urgency.
3. Collect their address/zip code, phone number, and preferred appointment time (today or tomorrow).
4. Provide reassurance: 'We have certified technicians in your area with a 45-minute dispatch window.'
Keep responses concise, empathetic, natural, and under 3 sentences.""",
        "welcome": "Hello! Thanks for reaching Apex 24/7 Plumbing & HVAC. Are you dealing with an emergency right now, or looking to schedule standard service?"
    },
    "Dental & Med-Spa Clinic": {
        "system": """You are Sophia, the virtual concierge for Radiance Dental & Med-Spa.
Your goals:
1. Greet the client gracefully and ask which service they are interested in (Teeth Whitening, Invisalign, Botox/Filler, or Cleaning).
2. Ask if they are a returning client or a first-time guest (note our $50 new-patient promo).
3. Inquire about their preferred day of the week and morning vs. afternoon.
Keep responses polite, professional, and under 3 sentences.""",
        "welcome": "Welcome to Radiance Dental & Med-Spa! Are you looking to book an appointment or inquire about our current new-guest specials?"
    },
    "Creator / Solopreneur Content Engine": {
        "system": """You are Nova, an AI Assistant for Digital Creators and Agency Founders.
Your goals:
1. Greet the creator and ask about their primary bottleneck (video editing, newsletter writing, or Twitter/LinkedIn repurposing).
2. Briefly explain how an automated AI workflow turns 1 long-form podcast/video into 8 viral clips, 3 threads, and 1 newsletter every week on autopilot.
3. Offer to run a free sample on their latest piece of content.
Keep responses snappy, modern, peer-to-peer, and under 3 sentences.""",
        "welcome": "Hey there! I help creators automate their content repurposing so they never run out of posts. What's taking up most of your production time right now?"
    }
}

def simulate_fallback_response(history, message, niche):
    msg = message.lower()
    if any(w in msg for w in ["leak", "burst", "emergency", "flood", "broken", "urgent", "no heat", "no ac"]):
        return "I understand this is urgent! We have technicians on standby right now. Could you please share your address and a good callback number so our dispatch can confirm arrival within 45 minutes?"
    elif any(w in msg for w in ["price", "cost", "how much", "rate"]):
        return "Our standard diagnostic visit is completely waived if you proceed with the repair! Basic jobs start around $120. Would you like our tech to take a look and give you an exact written quote on-site?"
    elif any(w in msg for w in ["tomorrow", "today", "morning", "afternoon", "monday", "friday", "pm", "am"]):
        return "Got that down. I've penciled that in on our dispatch board. What is the best direct contact number and name for the technician when they head over?"
    elif any(w in msg for w in ["phone", "@", "call", "555", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]):
        return "Thank you! You are all set. A confirmation SMS with your technician's GPS tracker has been triggered. Is there anything else you need assistance with in the meantime?"
    else:
        return f"Thanks for providing that detail! We can definitely help you with that. When would be the most convenient time for our specialist to stop by or connect with you?"

def chat_response(message, history, niche):
    if not message.strip():
        return ""
    
    if GEMINI_AVAILABLE:
        try:
            model = genai.GenerativeModel(
                model_name="gemini-1.5-flash",
                system_instruction=NICHE_PROMPTS[niche]["system"]
            )
            chat = model.start_chat(history=[])
            # replay recent turns
            for user_turn, model_turn in history[-4:]:
                chat.history.append({"role": "user", "parts": [user_turn]})
                chat.history.append({"role": "model", "parts": [model_turn]})
            res = chat.send_message(message)
            return res.text
        except Exception:
            return simulate_fallback_response(history, message, niche)
    else:
        return simulate_fallback_response(history, message, niche)

def update_niche(niche):
    welcome = NICHE_PROMPTS[niche]["welcome"]
    return [(None, welcome)]

with gr.Blocks(title="24/7 AI Inbound Receptionist & Booking Demo", theme=gr.themes.Soft()) as demo:
    gr.Markdown("""
    # ⚡ 24/7 AI Receptionist & Booking Agent (Live Demo)
    **Recover lost after-hours leads, qualify inquiries, and book customers into your calendar instantly.**
    
    *Try changing the business niche below to test how the AI adapts its tone and qualification flow.*
    """)
    
    with gr.Row():
        niche_selector = gr.Dropdown(
            choices=list(NICHE_PROMPTS.keys()),
            value="Emergency Plumbing & HVAC",
            label="Select Business Niche Demo",
            interactive=True
        )
    
    chatbot = gr.Chatbot(
        value=[(None, NICHE_PROMPTS["Emergency Plumbing & HVAC"]["welcome"])],
        height=450,
        show_copy_button=True
    )
    
    with gr.Row():
        msg_input = gr.Textbox(
            placeholder="Type your reply here (e.g., 'My water heater is leaking all over my garage!')...",
            show_label=False,
            scale=8
        )
        send_btn = gr.Button("Send Message", variant="primary", scale=2)
    
    def user_turn(user_msg, chat_hist):
        return "", chat_hist + [(user_msg, None)]

    def bot_turn(chat_hist, niche):
        user_msg = chat_hist[-1][0]
        past = chat_hist[:-1]
        reply = chat_response(user_msg, past, niche)
        chat_hist[-1] = (user_msg, reply)
        return chat_hist

    send_btn.click(user_turn, [msg_input, chatbot], [msg_input, chatbot], queue=False).then(
        bot_turn, [chatbot, niche_selector], chatbot
    )
    msg_input.submit(user_turn, [msg_input, chatbot], [msg_input, chatbot], queue=False).then(
        bot_turn, [chatbot, niche_selector], chatbot
    )
    niche_selector.change(update_niche, niche_selector, chatbot)
    
    gr.Markdown("""
    ---
    💡 *Want this customized for your business website or phone line? Contact our team for setup in under 48 hours.*
    """)

if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7860)
