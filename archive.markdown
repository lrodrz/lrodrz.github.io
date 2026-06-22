---
layout: default
title: Archive
description: Browse every post by year or filter the collection by topic.
permalink: /archive/
hero_image: /assets/images/june-2026/archive-hero.webp
image_alt: Mountain trail winding through a dry California landscape
eyebrow: The full notebook
---

{% include hero.html kind='page' %}

<section class="content-section archive-section">
  <div class="shell archive-shell">
    <div class="archive-intro">
      <p class="section-label">{{ site.posts.size }} published notes</p>
      <h2>Filter by topic</h2>
      <div class="tag-filters" data-tag-filters aria-label="Filter posts by tag">
        <button class="tag-filter is-active" type="button" data-tag="all" aria-pressed="true">All <sup>{{ site.posts.size }}</sup></button>
        {% assign sorted_tags = site.tags | sort %}
        {% for tag in sorted_tags %}
          <button class="tag-filter" type="button" data-tag="{{ tag[0] | slugify }}" aria-pressed="false">{{ tag[0] }} <sup>{{ tag[1].size }}</sup></button>
        {% endfor %}
      </div>
      <p class="archive-status" data-archive-status aria-live="polite">Showing all posts.</p>
    </div>

    <div class="archive-list" data-archive-list>
      {% assign current_year = '' %}
      {% for post in site.posts %}
        {% assign post_year = post.date | date: '%Y' %}
        {% if post_year != current_year %}
          {% unless forloop.first %}</div></section>{% endunless %}
          <section class="archive-year" data-archive-year>
            <h2>{{ post_year }}</h2>
            <div class="archive-year-posts">
          {% assign current_year = post_year %}
        {% endif %}
        <article class="archive-post" data-archive-post data-tags="{% for tag in post.tags %}{{ tag | slugify }} {% endfor %}">
          <a href="{{ post.url | relative_url }}">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d' }}</time>
            <span>{{ post.title | escape }}</span>
          </a>
        </article>
        {% if forloop.last %}</div></section>{% endif %}
      {% endfor %}
    </div>
  </div>
</section>
