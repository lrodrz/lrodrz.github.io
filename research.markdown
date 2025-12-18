---
layout: page
title: "Research"
permalink: /research/
use_math: true
---
<style type="text/css" media="screen">
  .center {
    text-align: center;
  }
  p { text-indent: 25px;
      font-size: 16px; 
  }
  grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }
  noind {
    text-indent: 0;
  }
</style>


<div class="center"> <h2> <b> Palermo Lab </b> </h2> </div>
<div class="center">



Principal Investigator: Dr. Giulia Palermo 

<br><br>

<u> Computational Biophysics </u>

<br>
<br>

<a href="http://www.palermolab.com">PalermoLab.com</a>

</div>

<br>

<p>
At PalermoLab, My research focuses on developing and applying of advanced classical and quantum mechanical molecular dynamics (MD) simulations to investigate the conformational dynamics and molecular mechanisms of CRISPR Cas systems. </p>
<p>
Additionally, in PalermoLab, we explore the use of artificial intellegence algorithms and frameworks for the advancement of molecular dynamics simulatoins to explore the rare-event conformational space. </p>
<p>
By employing these computional techniques, I aim to gain a fundamental understanding of DNA/RNA molecular systems and gene editors, ultimately providing mechanistic insights that complement and guide rational experimental design. </p>



<div class="center"> <h2> <b> Sode Lab </b> </h2> </div>
<div class="center">

<br>

Principal Investigator: Dr. Olaseni Sode

<br><br>

<u> Theoretical Computational Chemistry </u>
</div>

<br>

<div class="center">
<img src="https://i.ibb.co/YLX2tXt/gif-bending.gif" alt="gif-bending" width="400">
<br>
<p2>Image: The $\nu_2$ degenerate bending mode of CO<sub>2</sub>
</p2>
</div>

<br>

<p>
Previously, in my masters program at the California State University in Los angeles, I worked in the laboratory of Dr. Olaseni Sode’s laboratory research group. My masters thesis was to characterize weakly attracted van der Waals (vdW) complexes of Rg-CO<sub>2</sub> (Rg = He, Ne, Kr, Xe) using quantum chemistry software and machine learning. Understanding these weakly attracted complexes helped to elucidate weak intermolecular interactions of rare-gas systems.</p>

For a brief explanation of the fundamentals and motivation for this research check out my <a href='/research/2022/03/27/Research.html'>research update</a> from March of 2022. 

In short, to characterize these weakly interacting complexes we use their vibrational structures. To do this, we constructed a potential energy surface for each of the complexes. This surface is like a piece of paper that is warped in such a way that it has a low point or a divot in its center (an example of this can be found in the <a href='/research/2022/03/27/Research.html'>research update</a> from March of 2022). The lowest point in the surface is the surface’s global minimum. 

In the potential energy surface of Rg-CO$_2$, there are three variables that change the shape of the surface: the intermolecular distance between the carbon dioxide, angle that the carbon dioxide takes relative to the rare-gas (Rg) atom and the energy. When you plot the surface, the intermolecular distance and angle are plotted on the x and y axes and the energy is plotted on the z axis. 

The Sode lab has previously published the potential energy surface of the Ar-CO$_2$ complex using a contour plot that I have posted below. On this plot the z-axis is depicted in the contours like a contour map. Recall that the closer the lines are to each other in a contour plot, the steeper the region is on the plot. 

<div class=center>
<img width=400 src="https://i.postimg.cc/gcTk6M0X/Screenshot-2024-01-25-191009.png">
</div>

<br>

<h3> Poster Presentations: </h3>

<noind>
To see the full posters hosted by Google, click on the corresponding image.
</noind>

<br>

<grid>
<a href="https://drive.google.com/file/d/123HAg7Stw1aC85T6fjwyEp8NL-7mKe3L/view?usp=sharing">
  <img src="https://i.postimg.cc/yNCN8nPq/Screenshot-2024-01-24-185329.png" alt="Description of the image" width=400>
</a> 

<a href="https://drive.google.com/file/d/1cXJYeNzG7MaTdwIn9Jovsx6JXt-10lM-/view?usp=sharing">
  <img src="https://i.postimg.cc/GhbVdDYM/Screenshot-2024-01-24-185407.png" alt="Description of the image" width=400>
</a>
</grid>

<br>

<noind>
Please check out my  <a href="https://docs.google.com/document/d/1-94z5pGH82ASRE35aLlTAT7hAanZYivD/edit?usp=sharing&ouid=105026313310214492121&rtpof=true&sd=true">📄Curriculum vitae </a> or my <a href="https://orcid.org/0000-0002-2527-7204">
    <img alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" width="16" height="16" />
    ORCiD
</a> for a comprehensive summary of my past and present research roles, projects, and awards.
</noind>

<br>

<div class="recent-posts">
  <h2>Recent Research Posts</h2>

  {% for post in site.categories.research %}
    <h4>
      <a href="{{ post.url | relative_url }}">
        {{ post.date | date: "%a, %B %d, %Y" }} — {{ post.title }}
      </a>
    </h4>
  {% endfor %}
</div>
