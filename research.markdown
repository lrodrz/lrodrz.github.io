---
layout: page
title: "Research"
permalink: /research/
use_math: true
description: Current and previous work in computational biophysics and theoretical chemistry.
image_alt: A lab workbench with disassembled computers and rolled posters
eyebrow: Research portfolio
---

<section class="page-section lab-section" markdown="1">
## Palermo Lab

<p class="section-meta">Principal investigator: Dr. Giulia Palermo / Computational biophysics</p>

<p class="section-links"><a href="http://www.palermolab.com">PalermoLab.com</a></p>

<figure class="feature-figure">
  <img src="https://github.com/lrodrz/blog_images/blob/main/dec2025/20p_web_IMG_5996_edited.png?raw=true" width="600" alt="Palermo Lab group photo">
</figure>

At PalermoLab, my research focuses on developing and applying advanced classical and quantum mechanical molecular dynamics (MD) simulations to investigate the conformational dynamics and molecular mechanisms of CRISPR Cas systems.

Additionally, we explore the use of artificial intelligence algorithms and frameworks for advancing molecular dynamics simulations and exploring rare-event conformational space.

By employing these computational techniques, I aim to gain a fundamental understanding of DNA/RNA molecular systems and gene editors, ultimately providing mechanistic insights that complement and guide rational experimental design.
</section>

<section class="page-section lab-section" markdown="1">
## Sode Lab

<p class="section-meta">Principal investigator: Dr. Olaseni Sode / Computational chemistry</p>

<p class="section-links"><a href="https://github.com/sodelab/">GitHub.com/sodelab</a></p>

<figure class="feature-figure">
  <img src="https://github.com/lrodrz/blog_images/blob/main/dec2025/sodelab2024__w.png?raw=true" alt="Sode Lab group photo" width="600">
</figure>

<figure class="supporting-figure">
  <img src="https://i.ibb.co/YLX2tXt/gif-bending.gif" alt="Animated bending mode of carbon dioxide" width="400">
  <figcaption>Image: The $\nu_2$ degenerate bending mode of CO<sub>2</sub>.</figcaption>
</figure>

Previously, in my master's program at California State University, Los Angeles, I worked in the laboratory of Dr. Olaseni Sode. My master's thesis characterized weakly attracted van der Waals (vdW) complexes of Rg-CO<sub>2</sub> (Rg = He, Ne, Kr, Xe) using quantum chemistry software and machine learning.

This project culminated in my first first-author publication in 2024: Rodriguez, L.; Natalizio, M.; Sode, O. <strong>Theoretical Insights into the Vibrational Structure of Carbon Dioxide Rare-Gas Complexes.</strong> <i>J. Phys. Chem. A</i> <b>2024</b>, <i>128</i> (21), 4199-4205. <a href="https://doi.org/10.1021/acs.jpca.4c00639">https://doi.org/10.1021/acs.jpca.4c00639</a>.

For a brief explanation of the fundamentals and motivation for this research, read my <a href="/research/2022/03/27/Research.html">research update</a> from March 2022.

In short, to characterize these weakly interacting complexes we use their vibrational structures. To do this, we constructed a potential energy surface for each complex. In the potential energy surface of Rg-CO$_2$, there are three variables that change the shape of the surface: the intermolecular distance, the angle that the carbon dioxide takes relative to the rare-gas atom, and the energy.

The Sode lab has previously published the potential energy surface of the Ar-CO$_2$ complex using a contour plot. On this plot, the z-axis is depicted in the contours like a contour map. The closer the lines are to each other in a contour plot, the steeper the region is on the plot.

<figure class="supporting-figure">
  <img width="400" src="https://i.postimg.cc/gcTk6M0X/Screenshot-2024-01-25-191009.png" alt="Contour plot of a carbon dioxide rare gas potential energy surface">
</figure>
</section>

<section class="page-section" markdown="1">
## Poster presentations

To see the full posters hosted by Google, click on the corresponding image.

<div class="poster-grid">
  <a href="https://drive.google.com/file/d/123HAg7Stw1aC85T6fjwyEp8NL-7mKe3L/view?usp=sharing">
    <img src="https://i.postimg.cc/yNCN8nPq/Screenshot-2024-01-24-185329.png" alt="Poster presentation preview for molecular simulations of rhodopsin" width="400">
  </a>
  <a href="https://drive.google.com/file/d/1cXJYeNzG7MaTdwIn9Jovsx6JXt-10lM-/view?usp=sharing">
    <img src="https://i.postimg.cc/GhbVdDYM/Screenshot-2024-01-24-185407.png" alt="Poster presentation preview for density of states using a local basis" width="400">
  </a>
</div>

<p class="page-callout">For a comprehensive summary of my research roles, projects, and awards, see my <a href="https://docs.google.com/document/d/1-94z5pGH82ASRE35aLlTAT7hAanZYivD/edit?usp=sharing&ouid=105026313310214492121&rtpof=true&sd=true">Curriculum vitae</a> or my <a href="https://orcid.org/0000-0002-2527-7204">ORCiD profile</a>.</p>
</section>

<section class="recent-posts">
  <h2>Recent research posts</h2>

  {% for post in site.categories.research %}
    <h4>
      <a href="{{ post.url | relative_url }}">
        {{ post.date | date: "%a, %B %d, %Y" }} - {{ post.title }}
      </a>
    </h4>
  {% endfor %}
</section>
