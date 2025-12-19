---
layout: page
title: "Artificial-Intelligence"
permalink: /artificialintelligence/
use_math: true
---

<style type="text/css" media="screen">
  .center {
    text-align: center;
  }
  p { text-indent: 25px;
      font-size: 16px; 
  }
</style>


<h1>Artificial Intelligence and Machine Learning</h1>

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

