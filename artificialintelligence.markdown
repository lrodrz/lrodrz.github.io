---
layout: page
title: "Artificial Intelligence"
permalink: /artificialintelligence/
use_math: true
description: Experiments, explanations, and research notes in artificial intelligence and machine learning.
image_alt: A desktop computer build with a large CPU cooler and motherboard on a workbench
eyebrow: Research topic
---

Thank you for visiting my page on Artificial Intelligence (AI) and Machine Learning. Here, like my other pages, I will be posting updates and information as I learn and explore this topic. Each update will be in the form of a blog post that you can find either on the homepage my blog or in the recent posts in artificial intelligence below...


<div class="recent-posts">
  <h2>Recent Artificial Intelligence Posts</h2>

  {% for post in site.categories.artificialintelligence %}
    <h4>
      <a href="{{ post.url | relative_url }}">
        {{ post.date | date: "%a, %B %d, %Y" }} — {{ post.title }}
      </a>
    </h4>
  {% endfor %}
</div>
