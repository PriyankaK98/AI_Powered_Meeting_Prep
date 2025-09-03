# AI-Powered Sales Meeting Prep Guide

A Salesforce tool that helps sales reps prep for calls faster by generating instant account summaries, key talking points, and suggested next steps using AI.

## Features

- **User-focused**: Solves the real pain points of sales reps during prep.
- **Secure AI integration**: Customer names and deal sizes are masked before sending to AI.
- **Automated insights**: Apex service fetches account data, opportunities, and interactions, anonymizes it, and feeds it to AI.
- **Single-view briefing**: Reps see everything they need in one place.

## Tech Stack

- Salesforce Apex & Lightning Web Components (LWC)
- Named Credentials for secure API calls
- OpenAI GPT-OSS-20B:free (can switch to paid models for better accuracy)

## How it Works

1. Identify fields reps care about.
2. Mask sensitive data and send it to the AI model.
3. AI generates summaries and talking points.
4. De-mask the response and display it in a clear, actionable format.

## Security

- No customer names or exact deal sizes are exposed.
- Data is anonymized before AI processing.
