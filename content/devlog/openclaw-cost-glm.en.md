---
title: "Protecting My AI Agent's Wallet: Custom Cost Monitoring & The GLM Savior"
date: "2026-02-17"
---

# Protecting My AI Agent's Wallet: Custom Cost Monitoring & The GLM Savior

OpenClaw, the autonomous agent that's been making waves recently. It's full of potential, and experimenting with it has been an absolute blast. However, there is one major headache I've run into.

**The pay-as-you-go API costs are brutal.**

It really comes down to this.
Even though I tune memory functions and frequently refresh conversations to reduce context tokens, just developing a few simple skills with OpenClaw sends costs skyrocketing in no time.

I've been using Claude's faster model, Haiku 3.5, but those costs still pile up. Before I knew it, I was burning through $3-4 daily.
For personal R&D expenses, $90 a month (about 14,000 yen at current rates!) is just too painful.

So, I decided to confront this "OpenClaw Money Pit" problem head-on.

## Know Your Enemy: Implementing the "Cost Monitor" Skill

They say, "If you know the enemy and know yourself, you need not fear the result of a hundred battles." First, I needed to accurately grasp my current situation.
Since the consumption was so high, I decided to introduce a token consumption monitoring skill. I asked OpenClaw to help, and quickly whipped this up myself.

Meet the **AI Cost Monitoring Skill**.

<details>
<summary>Click here for the full Cost Monitor Skill (cost-monitor.yml)</summary>

```yaml
name: cost-monitor
description: Track API token consumption and costs across all sessions. Provides daily summaries at 11 PM JST with hourly breakdowns and weekly summaries on Sundays. Monitors all Claude models and calculates estimated costs based on current pricing. Use for proactive cost management and budget awareness.
---

# Cost Monitor Skill

Automatically track token consumption and estimated API costs across all sessions.

## What It Does

### Daily Monitoring
1. **Real-time cost estimation**
   - Query current session token usage
   - Calculate estimated cost based on model pricing
   - Display immediately on request

2. **Daily Report (11:00 PM JST)**
   - Hourly token usage breakdown (input/output)
   - Daily total (input/output tokens + estimated cost)
   - Send via WhatsApp

3. **Weekly Report (Every Sunday 11:00 PM JST)**
   - Day-by-day summary (input/output + cost)
   - Weekly total (input/output tokens + estimated cost)
   - Trends and insights
   - Send via WhatsApp

### Storage System (Hybrid)
- **cost-log-summary.md** - Latest 90 days (light for MEMORY.md)
- **costs/YYYY-MM-DD.md** - Daily detailed logs (current month)
- **costs/archive/** - Historical data (older than 90 days)

## How to Use

### On-Demand Cost Check
```
"What's my cost today?" or "Show me token usage"
```
Returns immediate estimate with hourly breakdown.

### Scheduled Reports
- **Daily**: Automatically sent to WhatsApp at 23:00 JST
- **Weekly**: Automatically sent to WhatsApp every Sunday at 23:00 JST

## Token Pricing Configuration

Currently configured for:
- **Claude Haiku 3.5**
  - Input: $0.25 per 1M tokens (※Adjust based on latest pricing)
  - Output: $1.25 per 1M tokens

Future support for:
- Claude 3.5 Sonnet
- Other Anthropic models

See `references/pricing-config.md` for model pricing details.

## Daily Report Example

```
📊 **Daily Cost Report - 2026-02-15**

**Hourly Breakdown:**
- 00:00-06:00: 12.5k input / 45.2k output
- 06:00-12:00: 28.3k input / 156.7k output
- 12:00-18:00: 8.9k input / 62.1k output
- 18:00-23:00: 5.2k input / 34.5k output

**Daily Total:**
- Input: 54.9k tokens
- Output: 298.5k tokens
- Estimated cost: $1.29

**Note:** Costs are estimates based on current pricing.
```

## Automation

Configured as cron jobs:
- Daily report: `0 23 * * *` (11:00 PM JST, Asia/Tokyo)
- Weekly report: `0 23 * * 0` (Sunday 11:00 PM JST, Asia/Tokyo)
```
</details>

Now, my "Daily Splurge Report" is delivered to my WhatsApp every day.
It’s convenient. Convenient, yes, but... I was faced with the cruel reality that **measuring costs doesn't actually lower them**. "Ah, I spent another $3 today..." I'd cry myself to sleep.

## The Savior: Zhipu AI's "GLM Coding Plan"

After searching high and low, I found my solution: "GLM," an LLM provided by China's Zhipu AI.
[https://z.ai/model-api](https://z.ai/model-api)

"Made in China? Is it secure?" Some might raise an eyebrow. But for autonomous agent development like OpenClaw, I can't afford to be picky right now—and the reputation in the community is actually very good.

The best part is that they offer a **special package dedicated to coding called the 'GLM Coding Plan'.**
Believe it or not, the **Lite plan is a monthly subscription for just $10 (approx. 1,500 yen).**

For someone who burned through nearly $9 in API costs just 3 days after launching OpenClaw, this is truly a godsend. Unlimited use for 1,500 yen a month (subject to fair use policies, of course).

You might think "cheap means low quality," but benchmarks show that models like "GLM-4" and "GLM-4.7" perform extremely well, with "GLM-4.7" rivaling Claude 3.5 Sonnet and Gemini 3 class models. In actual use, I have absolutely no complaints about its coding capabilities so far.

## Implementation: Overcoming the "Traps" of Flat-Rate APIs with AI

So, I implemented it immediately.

1.  Create an account (Link with Google account. Super easy).
2.  Subscribe to a monthly plan.
    *   *Note: The default view might show a 3-month plan, so switch to "Monthly" if you just want to try it out.*
3.  Enter card information (Paypal is available if you're cautious).
4.  Get your API Key.

Up to this point, it's super easy.
There's also an official guide for applying it to OpenClaw.
[https://docs.z.ai/devpack/tool/openclaw](https://docs.z.ai/devpack/tool/openclaw)

*Note: There were many reports of getting BANs when trying to connect OpenClaw with Antigravity (Gemini) previously, but GLM is officially supported, so it's safe.*

Even better, this guide page has a copy button in the center that copies "text prompts specifically for telling your AI agent about this page." What a thoughtful design.
I just threw this at my AI, and it was supposed to handle the rest...

### The Trap: Endpoint Differences

I basically left the configuration to Antigravity, but it wouldn't work. I kept getting errors like "No credit balance." Even though I just paid!

There was a trap I fell into.
The endpoint URL for the standard pay-as-you-go API and the flat-rate Coding Plan API **are different**.

> Note: When using the GLM Coding Plan, you need to configure the dedicated Coding endpoint - `https://api.z.ai/api/coding/paas/v4` instead of the general endpoint - `https://api.z.ai/api/paas/v4`

If you configure the standard URL, you get scolded for having "no pay-as-you-go balance" even though you have a subscription. I see.

And here is where "Vibe Coding" truly shines.
I don't open a black screen (terminal) and edit `config.json` with `vim`.

**"Antigravity, please SSH into the server and fix it."**

This is it.
Antigravity (the AI inside my computer) connects to the Xserver VPS via SSH.
It then launches OpenClaw via command line, watches the error logs, and talks to OpenClaw (the AI inside the server).

"Hey OpenClaw, it looks like your config file URL is wrong. The official docs say you need to change this part of `config.json` to `api/coding/paas/v4`."
"Ah, you're right. I'm fixing it."

...This conversation (actually an exchange of JSON and commands) unfolded right in front of me as Antigravity debugged OpenClaw and completed the fix.
I just watched it happen while drinking my coffee.

## Conclusion: Psychological Safety is Priceless

And so, the GLM Coding Plan was installed.
It's running very smoothly so far. GLM handles Japanese interactions without any issues. Its understanding of instructions is sharp.

Above all, **using it without worrying about token costs is incredibly comfortable.**
I can give instructions to OpenClaw saying, "Just try this! If it doesn't work, try again!" without hesitating and thinking, "Will this cost me another dollar...?" I realized that this psychological safety is essential for agent development.

In the era of autonomous agents, flat-rate LLMs might just be the lifeline for us individual developers.
To everyone trembling at their OpenClaw bills, I highly recommend the GLM Coding Plan.

---
*Created by Human(Akira Tsukakoshi) & AI (Antigravity)*

**Post Credits**
- **Original Idea:** Human (Akira Tsukakoshi)
- **Structure:** AI (Antigravity)
- **Writing:** AI (80%) / Human (20%)
- **Translation:** AI (Antigravity)
