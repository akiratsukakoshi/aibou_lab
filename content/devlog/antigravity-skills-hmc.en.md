---
title: "Turning Routine Work into Creative Play: Building My Own AI Secretarial Team with Antigravity × skills"
date: "2026-02-11"
---

Do you like administrative work?

I absolutely hate it. Accounting, task management, organizing meeting minutes... I know I have to do it, but I always procrastinate. Maybe it's because I feel like it's "not productive".

But recently, that monotonous administrative work has been transforming into "exciting, creative time" for me.

The keyword is "mentoring a junior".
Instead of using AI merely as a "convenient automation tool", I redefined it as "junior staff" that I need to patiently mentor. The moment I shifted my perspective, boring routine work turned into an experimental field of co-creation with AI.

Today, I’d like to talk about how I am building my own AI secretarial team (HMC: Harappa Management Cockpit) using **Antigravity**, a new AI agent from Google Deepmind, and its **"skills"** feature.

## My Personal Cockpit: "HMC"

I created a project directory called **HMC (Harappa Management Cockpit)** in my local environment to manage all my daily operations.

The mechanism is simple. I place "instruction manuals (Prompts)", "data", and "code" in folders, and have the Antigravity AI agent read and execute them. That's it.

Why go through the trouble of doing it locally instead of using common SaaS (cloud services)?
Because it's "freeing". Since I don't depend on a package, I can customize it endlessly to fit my workflow. And above all, since both data and logic are at hand, I have the peace of mind that I can "move" the entire folder even if a better environment than Antigravity appears in the future.

Currently, my HMC is structured like this:

```text
harappa-cockpit/
├── .agent/skills/        # Agent Skills (Collection of instructions for AI)
│   ├── finance_importer/ # Accounting staff skill
│   ├── hmc_pilot/        # Co-pilot (General progress)
│   ├── minute_maker/     # Minute taker
│   └── sns_pilot/        # SNS poster
├── tasks/                # Task Management Database
│   ├── inbox/            # Inbox (Unprocessed tasks)
│   ├── active_tasks.md   # Today's active tasks
│   ├── backlog.md        # Future plans
│   └── archive.md        # Archive of completed tasks
```

It's like having "specialized staff" waiting in each folder with their specific roles.

## "skills": Packaging Context

Have you ever had this problem when using chat AI?

1.  If you talk for a long time in one chat, the AI gradually forgets previous details or starts behaving strangely.
2.  But if you start a new chat, it's a hassle to explain the "prerequisites" from scratch.

The feature that solves this dilemma of "maintaining context" vs. "fresh start" is Antigravity's **"skills"**.

"skills" are essentially packaged "operation manuals".
You save instructions like "Do this task in this procedure, in this format" as a skill in advance. Then, even if you open a new chat, just calling that skill instantly switches the AI to "that capable worker who knows the usual routine".

## Example: Task Management in Perfect Sync

What I love using daily is the "Task Management" skill in HMC.
Daily operations revolve around this "perfect sync" with AI.

**1. Morning Briefing**
First thing in the morning, coffee in hand, I talk to the AI.
"Let's do the morning briefing."
The AI then reads `active_tasks.md` (task list) and my Google Calendar for the day, organizing and presenting "what needs to be done today". I check it and plan my day's flow.

**2. Daytime**
I copy and paste the tasks organized by the AI into the notepad I always use. During the day, I forget about the AI and just focus on the work in front of me, following that memo.

**3. Evening Review**
When the day is over, I talk to the AI again.
"Let's do the daily review."
I tell it, "I finished this and this today. Also, this new task came up," and the AI says "Great work!" while moving completed tasks to `archive.md` and updating `active_tasks.md` with the remaining ones.

I don't need to explain "The task file is here... the format is this..." every time. Like an excellent secretary, it processes things quickly with the usual procedure. This feeling of "being on the same wavelength" is irresistible.

## The Fun of "OJT" Not Aiming for 100%

However, the AI doesn't work perfectly from the start.
In fact, it's full of failures at first.

1.  **Define Requirements**: Decide "I want to automate this task" and have the AI create a draft of the skill.
2.  **Try it out**: Actually run it. Errors occur, or it moves unexpectedly.
3.  **Fix it**: Correct the skill (manual) while dialogue with the AI, saying "Tweaked that part a bit like this".

This is exactly **OJT (On-the-Job Training)** for a new employee.
Hand over the manual, let them try, give feedback, and rewrite the manual.

I don't aim for "100%" in this process. 70-80% is enough.
Aiming for perfection is exhausting, but if you have the mindset of "Well, if it's about 80% right every time, I'll fix the rest," you can enjoy the AI's growth itself.

And above all, this "process of nurturing AI" is surprisingly creative and fun.

"How should I give instructions so he can move without hesitation?" "Would it be smoother if I changed this procedure?" Thinking about these things is algorithmic thinking, and it's also an intellectual game like solving a puzzle.

Monotonous and boring administrative work turns into a creative project of "nurturing an AI secretary".
The pleasure of clearing tasks at explosive speed in cooperation with an AI raised to your liking.
I feel this "fun" is the greatest benefit of HMC operation.

## Conclusion: Micro-Business Owners, Let's Build Your Own Strongest Team

Large corporations may have expensive systems and excellent staff.
But small business owners like us (I often call myself a "person of the frontier") don't have those resources.

That's exactly why we need AI.
Even if you are not an engineer, even if you can't write code, with Antigravity and skills, you can build "your own strongest back-office team" with just words.

You don't need to fit yourself into existing systems.
Why not start "educating" your own AI secretary from the small routines at hand?
I'm sure tomorrow's administrative work will be just a little bit more something to look forward to.

---
*Created by Human(Akira Tsukakoshi) & AI (Antigravity)*

**Post Credits**
- **Original Idea:** Human (Akira Tsukakoshi)
- **Structure:** AI (Antigravity)
- **Writing:** AI (90%) / Human (10%)
- **Translation:** AI (Antigravity)
