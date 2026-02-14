---
title: "Taking on \"Openclaw\" as a Non-Engineer: With My Partner, Antigravity"
date: "2026-02-15"
---

Have you heard of "openclaw"? ([openclaw](https://openclaw.ai/))
It is currently one of the hottest topics in the world of autonomous AI agents. You might have also heard about it in connection with "[moltbook](https://www.moltbook.com/)," an SNS exclusively for agents (no humans allowed!!). It's a hot topic right now (humans can observe, so please take a peek).

What makes openclaw so remarkable is that it resides on your desktop.
It acts as a "secretary" that can do almost anything for "you" on your PC, from searching emails to creating files. What is particularly noteworthy is its ability to control the browser. If you give it permissions, it can autonomously handle almost everything a human does on the web.
It supports a wide range of interfaces for interaction, including Discord, LINE, and WhatsApp, leaving nothing to be desired.

"Amazing! The future is here."
"The scope of what it can do is too broad, the security risk is too high..."

In circles that follow the cutting edge of AI, discussions have been raging for the past few weeks between its innovation and its risks. In fact, incidents of massive API key leaks have been reported.

There is fear, but my nature compels me to want to touch new things.
I decided to install it.
However, I didn't have the courage to put it on my main desktop machine...
If it were to go out of control and delete important data, I couldn't bear to look.

So, I decided to install it on a rental cloud server (Xserver VPS) that I rent for experimental purposes.

Servers.
The great wall that stands equally before us non-engineers. The difficulty of configuration, the hurdle of not having data at hand. The flying katakana technical terms. Servers are scary...

But this time is different. Because I have "Antigravity".

What I do is simple.
Have Antigravity connect to the server via SSH.
Then, install openclaw into the environment from Git through Antigravity.
That is practically all I do.

Of course, it doesn't go smoothly. Errors occur, it stops due to mysterious dependencies, or it doesn't start at all...
Usually, I would get frustrated here and think, "Forget it."
But with Antigravity, it's okay. It reads the error logs, identifies the cause, and proposes and executes the necessary fixes. I just have to watch and say, "Hmm, I see (I don't understand)."

I managed to get openclaw up and running. I was moved.
This is where it got interesting: openclaw itself can interact via the command line.

I launch openclaw in the command line within Antigravity, and proceed with the basic settings while interacting with openclaw itself.
"How should we set up the skills?" "What interface should we use?"
openclaw updates its own settings by itself.
And when a tricky error that depends on my server environment occurs, openclaw gets confused and stops.
Then, it immediately throws a question to Antigravity.

"Hey, what's going on here?"
"Ah, that's because the setting path here was wrong, so I fixed it."

It's a strange sight, as if AIs are teaming up to work together.
With this dual-wielding of "Antigravity with a meta-perspective" and "openclaw in charge of practical work," the initial setup proceeded briskly, leaving my clunky server knowledge in the dust.

Thus, openclaw was successfully introduced.
How will I master her (called gaku-co, meaning co-working with Gakucho) as my future "AIBOU" (Partner)?
How will it change my work and life?

I would like to take some time to report on that thoroughly again.
Stay tuned.

---
*Created by Human(Akira Tsukakoshi) & AI (Antigravity)*

**Post Credits**
- **Original Idea:** Human (Akira Tsukakoshi)
- **Structure:** AI (Antigravity)
- **Writing:** AI (70%) / Human (30%)
- **Translation:** AI (Antigravity)
