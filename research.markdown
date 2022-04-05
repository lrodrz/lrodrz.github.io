---
layout: page
title: "Research"
permalink: /research/
use_math: true
---
<style type="text/css" media="screen">
  .container {
    text-align: center;
  }
  p { text-indent: 25px; }
  p2 {}
</style>

<h3> Sode Lab: </h3>
<div class="container">

<br>

Principal Investigator: Dr. Olaseni Sode

<br>

Theoretical computational chemistry and vibrational spectroscopy.</div>

<br>

<p>
The theme of the Sode Lab is to investigate the theoretical chemistry of rare-gas system for the elucidation  of the nature of weakly bound systems.</p>


<br>

<div class="container">
<img src="https://i.ibb.co/YLX2tXt/gif-bending.gif" alt="gif-bending" width="400">
<br>
<p2>Image: A degenerate bending mode of CO<sub>2</sub>
</p2>
</div>

<h3> Ba Lab: </h3>
<div class="container">
<br>

Principal Investigator: Dr. Yong Ba

<br>

Synthesis and Characterization of $\beta$-clyclodextrin clathrate structures for the inclusion of anti cancer molecules such as sorafineb.</div>

<br>
<div class="container">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Cyclodextrin.svg" title="beta-cyclodextrin" width="800" >
</div>
<p2>Image: The typical family of cyclodextrins. In the center we have beta cyclodextrin. Image from wikipedia's <a href="https://en.wikipedia.org/wiki/Cyclodextrin">cylodextrin</a> page.</p2>
<br>

<br>

<h3> Hayes Lab: </h3>
<div class="container">

<br>

Principal Investigator: Dr. Micheal L Hayes
</div>

<br>

Characterization of DYW domain

<br>

blah blah blah the quick brown fox jumped over the lazy dog 

<br>

<h3> Recent Research Posts: </h3>


{% for research in site.categories.research %}
  <h4> <a href="{{research.url}}">
  --- &nbsp; &nbsp; 
  {{research.date | date: "%a, %B %d, %Y" }}
  :
  &nbsp;
  {{research.title}}
  </a> 
  </h4>
  <br>
{% endfor %}
