AI-Powered Sales Meeting Prep Guide

A Salesforce tool that helps sales reps prep for calls faster by generating instant account summaries, key talking points, and suggested next steps using AI.

Features

User-focused: Solves the real pain points of sales reps during prep.

Secure AI integration: Customer names and deal sizes are masked before sending to AI.

Automated insights: Apex service fetches account data, opportunities, and interactions, anonymizes it, and feeds it to AI.

Single-view briefing: Reps see everything they need in one place.

Tech Stack

Salesforce Apex & LWC

Named Credentials for secure API calls

OpenAI GPT-OSS-20B:free (can switch to paid models for better accuracy)

How it Works

Identify fields reps care about.

Mask sensitive data and send it to the AI model.

AI generates summaries and talking points.

De-mask the response and display it in a clear, actionable format.

Getting Started

Clone the repo.

Deploy Apex classes and LWC components to Salesforce.

Configure Named Credentials for AI API calls.

Test with anonymized account data.

Security

No customer names or exact deal sizes are exposed.

Data is anonymized before AI processing.
