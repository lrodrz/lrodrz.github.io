---
layout: post
title:  "New Age of AI"
author: Larry Rodriguez
date:   2026-06-22 00:00:18 -0700
categories: Artificial Intelligence
tags: [artificial-intelligence]
image_alt: "New Age of AI"
#image_credit: "Photographer Name"                # optional
#image_credit_url: "https://source-link.com"      # optional
use_math: true
toc: true
comments: true
---

# The State Of AI


When ChatGPT 3.5 was released in 2022, it was a remarkable sight. At that time, I was learning to code through textbooks I would buy on Amazon, and I would go to Stack Overflow again and again to compare the code I had written against the most helpful version of that code. For learning, this process is useful. In my experience, being able to fail over and over while trying to solve a problem—before finally getting the solution—was how I learned and retained information best. When ChatGPT came out, I was a bit hesitant to adopt the technology, but as my workload grew more complex, I found it increasingly useful.

These days, agentic coding has become the standard. We are moving toward an age where basic tasks are handed off to agents while we act as composers. Beyond that, we are working toward an age where we will have a swarm of agents operating under a composer model that we direct toward grander tasks.

And that is roughly what my blog post today is about. I find myself at a point where I am looking into the newest and most relevant thing to hop on this year: agent harnesses.

Essentially, now that agents can work for long periods of time, it has become more important to structure the scaffolding around them—so they can perform tasks and have those tasks evaluated as they happen. This increases productivity, maximizes the time agents spend actually doing tasks, and improves accountability.

### The "Composer" Role
I think that as we take on the role of composers of these projects—rather than just technicians getting lost in the sauce—we have an opportunity to create far more complex solutions to the problems we've been facing in our respective fields. Personally, I find that delegating the routine work so I can focus on understanding the more complex parts of my workflow—such as designing an algorithm or implementing a clever data structure for the repositories I build—is a much better use of my time than spending hours debugging why one package won't play nicely with another. Of course, debugging is part of the process and an important part of being a flexible programmer. But as we move forward, I think we can afford to worry a little less about at least that.

#### Agent Harnesses

I was watching a few videos from the AI Engineer YouTube channel, and one comment in particular stuck with me. One of the speakers said something along the lines of, *"2025 was the year of agents. Now 2026 is the year of agent harnesses."* That sentence captured what feels like the next major shift in how people are using large language models.

In the early days of the LLM boom, most interactions revolved around writing better prompts. You would spend time crafting a system prompt that established the model's behavior, such as:

```plaintext
You are the best coder ever. You make no mistakes. Give me clean and maintainable code.
```

Then you would send your request:

```plaintext
Make GTA 6. Make no mistakes.
```

From there, the workflow was fairly straightforward. The model would generate code, you would copy it into your editor, debug the errors, ask follow-up questions, and repeat the process until you eventually reached a working solution.

Today, coding agents such as Codex and Claude Code operate very differently. Rather than working on a single response at a time, they can inspect entire repositories, edit multiple files, run terminal commands, execute tests, and iterate on failures for extended periods with minimal human intervention.

This is where agent harnesses come into the picture.

From my perspective, an agent harness is the collection of systems built around the language model that enables it to work autonomously and reliably. The language model provides the reasoning, but the harness provides the workflow. It gives the model access to tools, manages memory, retries failed tasks, runs automated tests, evaluates outputs, and decides what should happen next. Instead of simply asking a question and receiving an answer, we are now designing environments in which agents can continuously work toward completing larger objectives.

During the first few years of the LLM revolution, much of the discussion centered around the models themselves. Is the newest model smarter? Can it code? How does it compare to a human programmer? Those questions are still important, but I have noticed the conversation beginning to shift. Increasingly, the limiting factor is no longer the raw intelligence of the model, but how effectively humans can integrate that intelligence into useful workflows.

An analogy that comes to mind is an Olympic sprinter. Raw speed alone is not enough to win medals. Elite athletes also rely on coaches, nutritionists, trainers, sports psychologists, physicians, and carefully designed training programs. Their support system allows them to consistently perform at the highest level.

Agent harnesses serve a similar purpose. The language model is the athlete, while the harness is the support team that helps it perform effectively. As models continue to improve, I suspect the biggest gains will increasingly come not only from smarter models, but from building better systems around them. The future may belong less to those with access to the most powerful model and more to those who can best orchestrate, evaluate, and direct that intelligence toward meaningful work.


### Slopgeddon
A valid concern for many is that as we increase our output from these agents and models, we may end up creating worse and worse code—perhaps heading toward a point where we're churning out a bunch of slop over and over. This is the risk of not being prudent and intentional about reviewing what we produce. The point I wanted to make in my last section is this: yes, we're outsourcing some of the work, but we shouldn't outsource understanding—or even just glancing at our code. This is especially true as we approach the final steps of shipping code out into the world.


#### The Loss of Human Voices

One thing I found myself thinking about years ago, when the first chatbot models became popular, was how they might change the way we write. As anyone reading this post can probably tell, I had some help writing and editing this document with artificial intelligence. In fact, I intentionally left many of the em dashes in this post as a small reminder of that collaboration. From this point forward, I plan to continue writing my blog in much the same way: I write down my thoughts, and then I let AI help smooth out the language.

That, however, is where my concern begins.

If I am no longer paying close attention to the exact wording of every sentence or the structure of every paragraph, am I slowly giving up my own voice in exchange for something closer to the average?

Before chatbots could produce polished essays in seconds, writing was often a slow and sometimes frustrating process. You would write a draft, revise it, rewrite entire sections, and continue editing until your ideas finally resembled what you wanted to say. Somewhere in that process, your writing style began to emerge. Your choice of words, your pacing, your awkward phrases, and even your mistakes became part of your identity as a writer.

Now I wonder whether that is beginning to change.

If millions of people rely on similar language models to polish their writing, will our individual voices gradually begin to converge? Will future historians look back at this period and notice that personal writing suddenly became more uniform? If AI becomes everyone's editor, are we unintentionally creating a common writing style that smooths away some of the quirks that once made our writing uniquely our own?

For now, I think my answer is no—or at least, not yet.

Although I am no longer spending days editing every paragraph of a hobby blog, I still believe the important part comes from me. The ideas, opinions, questions, and occasional crackpot theories are still mine. AI simply helps organize them into something that is easier to read. In that sense, I think of AI less as an author and more as an editor. I decide what deserves to be said, and it helps me say it more clearly.

Perhaps that is the balance I want to strike going forward. I do not want AI to replace my voice. I want it to amplify it. If someone reads these posts ten years from now, I hope they are still reading *me*—just with a little help from a very patient editor.
