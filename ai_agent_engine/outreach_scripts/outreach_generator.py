#!/usr/bin/env python3
"""
Automated AI Outreach & Spec-Work Generator
Generates high-converting, hyper-personalized outreach sequences for cold email,
X/Twitter DMs, and Instagram DMs with pre-built spec-work samples.
"""

import json
import csv
import sys
import os

PROSPECTS_DEFAULT = [
    {
        "first_name": "Mike",
        "company_name": "Denver Fast Plumbers",
        "niche": "Plumbing & HVAC",
        "city": "Denver",
        "service_focus": "Emergency water heater replacement & drain clearing",
        "contact": "mike@denverfastplumbing.example.com",
        "channel": "email",
        "demo_link": "https://huggingface.co/spaces/YOUR_USERNAME/ai-receptionist-demo"
    },
    {
        "first_name": "Sarah",
        "company_name": "Luminate Med Spa",
        "niche": "Med-Spa & Aesthetics",
        "city": "Austin",
        "service_focus": "Hydrafacials, Botox, and laser skin resurfacing",
        "contact": "@luminatemedspa",
        "channel": "instagram_dm",
        "demo_link": "https://huggingface.co/spaces/YOUR_USERNAME/ai-receptionist-demo"
    },
    {
        "first_name": "David",
        "company_name": "Apex Tech Growth",
        "niche": "Creator / Solopreneur",
        "city": "Remote",
        "service_focus": "Weekly AI newsletter & YouTube tech breakdowns",
        "contact": "@davidbuilds",
        "channel": "twitter_dm",
        "demo_link": "https://huggingface.co/spaces/YOUR_USERNAME/ai-receptionist-demo"
    }
]

def generate_cold_email(prospect):
    first_name = prospect.get("first_name", "there")
    company = prospect.get("company_name", "your team")
    city = prospect.get("city", "your area")
    niche = prospect.get("niche", "local services")
    service = prospect.get("service_focus", "your core services")
    demo_link = prospect.get("demo_link", "#")

    subject = f"missed calls at {company}"
    
    body = f"""Hi {first_name},

Noticed {company} handles {service} in {city} — which usually means a heavy volume of incoming calls and urgent form inquiries.

Quick question: how many after-hours inquiries or emergency leads slip through the cracks when your crew is busy on jobs or after 6 PM?

We built a lightweight 24/7 AI Receptionist agent specifically for {niche} businesses that answers inbound inquiries in 1 second, pre-qualifies urgency, and schedules jobs straight onto your calendar.

I actually spun up a live interactive demo pre-trained on {company}'s services so you can test it yourself:
👉 {demo_link}

Most local teams using this recover 5–8 high-ticket jobs every month that otherwise bounce to competitors.

Worth a 5-minute chat to see how it can plug into your site and phone line?

Best regards,
Alex | AI Solutions Specialist"""

    follow_up = f"""Hi {first_name},

Circling back on this. We recently launched this system for a similar {niche} provider in a neighboring area.

In its first two weeks, it automatically fielded 38 after-hours inquiries and captured $5,400 in booked jobs that previously went unanswered to voicemail.

You can test drive the interactive demo here (takes 30 seconds):
👉 {demo_link}

Open to seeing how quickly we can configure this for {company}?

Best,
Alex"""

    return {"subject": subject, "email_1": body, "follow_up_day_3": follow_up}

def generate_twitter_dm(prospect):
    first_name = prospect.get("first_name", "there")
    service = prospect.get("service_focus", "content")
    demo_link = prospect.get("demo_link", "#")

    hook = f"Hey {first_name} — caught your recent breakdown on {service}. Wrote something quick for your workflow that you can use right away — want me to drop it here?"
    
    pitch = f"""Awesome! Here is a sample automated AI content pipeline breakdown tailored to your topic:

📌 1 Long-form topic ➔ 
  • 1 punchy 5-tweet actionable framework
  • 1 LinkedIn high-signal carousel outline
  • 1 newsletter takeaway summary

I run an AI pipeline that delivers 15 of these ready-to-post assets every month so you stay consistent without spending hours editing.

You can also test our live interactive workflow bot here:
👉 {demo_link}

Open to checking out 2 more custom samples?"""

    return {"opening_hook": hook, "delivery_and_pitch": pitch}

def generate_instagram_dm(prospect):
    first_name = prospect.get("first_name", "there")
    company = prospect.get("company_name", "your clinic")
    service = prospect.get("service_focus", "treatments")
    demo_link = prospect.get("demo_link", "#")

    hook = f"Hey {first_name}! Love your recent posts on {service}. Quick question: does your front desk manage all appointment inquiries in the DMs manually, or do you have an automated booking bot set up yet?"

    pitch = f"""Got it! We built a custom 24/7 AI concierge for boutique clinics that instantly answers pricing/prep FAQs in the DMs and locks in calendar bookings 24/7.

I actually configured a live preview for {company} here:
👉 {demo_link}

Takes 30 seconds to try. Open to seeing how it looks?"""

    return {"opening_hook": hook, "delivery_and_pitch": pitch}

def generate_all_campaigns(prospects_list):
    output = []
    for p in prospects_list:
        record = {
            "prospect": p,
            "email_sequence": generate_cold_email(p),
            "twitter_dm_sequence": generate_twitter_dm(p),
            "instagram_dm_sequence": generate_instagram_dm(p)
        }
        output.append(record)
    return output

if __name__ == "__main__":
    campaigns = generate_all_campaigns(PROSPECTS_DEFAULT)
    output_path = os.path.join(os.path.dirname(__file__), "../prospects/sample_campaigns.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(campaigns, f, indent=2)
    print(f"✅ Generated {len(campaigns)} tailored campaigns! Saved to {output_path}")
