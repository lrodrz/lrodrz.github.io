---
layout: page
title: "Molecular-Dynamics"
permalink: /moleculardynamics/
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


<h1>Molecular Dynamics</h1>


<p>
Welcome to my page on Molecular Dynamics. I began my journey in molecular dynamics in my Ph.D. program in the Palermo Lab at the University of California, Riverside. As I progress through my journey in biophysics through out my Ph.D. Program, I hope to update this part of my blog with some useful information about how molecular dynamics simulations can be used to study biological systems and how they work with some straightforward examples and explanations.</p>


<div class="recent-posts">
  <h2>Recent Molecular Dynamics Posts</h2>

  {% for post in site.categories.moleculardynamics %}
    <h4>
      <a href="{{ post.url | relative_url }}">
        {{ post.date | date: "%a, %B %d, %Y" }} — {{ post.title }}
      </a>
    </h4>
  {% endfor %}
</div>
