---
title: "The Essence of Vibe Coding: Requirements Definition is All About \"Questions\""
date: "2026-02-14"
---

# The Essence of Vibe Coding: Requirements Definition is All About "Questions"

As I wrote in a previous post, I’ve recently been obsessed with optimizing my workflow using AI. It’s effective—creating apps and skills to optimize my own tasks through "Vibe Coding" and running them.

However, immersing myself in this world sometimes brings an intense sense of futility.
New services and features appear every day, springing up like mushrooms after rain. A feature I spent all night struggling to implement, fighting through errors, might be announced the very next morning as a "New Feature Added!" in some service. Or often, I realize that a solution already existed in the world, and I just didn't know about it.

It feels less like "reinventing the wheel" and more like "desperately hacking a trail through the brush right next to a newly opened highway."

That is sad in its own way, but I believe in keeping moving forward. Even if it seems inefficient from a global perspective, sticking to this path is fun, and I believe it is a way to update myself.

So, in creating these new things, I asked myself: what is the most important part of Vibe Coding?
The conclusion: **Requirements Definition**. It all comes down to this.

Accurately grasping what it is that I truly wish to achieve.
Visualizing the process to realize it.
And recognizing whether it is at a difficulty level I can currently handle.

I believe that shaping these aspects through the organization of requirements is the most important thing.

## The Key to Requirements Definition is "Questions"

So, how do we proceed with this requirements definition? The key lies in "Questions."

We tend to ask Generative AI for "Answers."
"Write code to do X."
"Teach me how to do Y."
Of course, these are wonderful ways to use it, but in requirements definition, it is the opposite.

**Don't ask AI for the answer; ask it to throw questions back at you.**

"I want to make X. What elements do you think are necessary for this? What information is missing?"
Throw this at the AI. Then, like an excellent secretary, the AI will return several questions.

By answering these "questions," your vague desires are verbalized, and the requirements are narrowed down.
Like carving a diamond from rough stone, you repeat this catch-ball of questions and answers. Once things are narrowed down to a certain extent, you request: "Okay, based on this conversation, please create a Requirements Definition Document." This is the point.

## Distinguishing Between Two Agents

In my case, to make this process more robust, I clearly separate the agents (roles).

1.  **Requirements Definition Agent**: A sparring partner. Its role is to ask questions, organize thoughts, and ultimately output a "Requirements Definition Document."
2.  **Coding Agent**: Its role is to take the received Requirements Definition Document and essentially just write the code.

I have the Requirements Definition Agent output the final deliverable in "Source Code Format (a markdown file enclosed in code blocks)." I then copy and paste this as-is and pass it to the Coding Agent as a file, allowing the implementation work to proceed smoothly.

Why separate them? There are two reasons.

One is to save the Coding Agent's tokens (like memory capacity). If you make the Coding Agent read the long history of trial and error from the requirements definition phase, the context becomes too long, making it sluggish or prone to forgetting previous instructions.

The other is to incorporate a different agent's perspective. It’s like a second opinion. Even if the Requirements Definition Agent thinks a design is perfect, passing it to the Coding Agent might result in feedback like, "This implementation is inefficient."

For us non-engineers, the "Frontier People," the weapon to survive in this torrent-like AI era might not be the speed of catching up, but the power of "Questions" to deeply excavate what we ourselves "want to do."

---
*Created by Human(Akira Tsukakoshi) & AI (Antigravity)*

**Post Credits**
- **Original Idea:** Human (Akira Tsukakoshi)
- **Structure:** AI (Antigravity)
- **Writing:** AI (85%) / Human (15%)
- **Translation:** AI (Antigravity)
