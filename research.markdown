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
  p { text-indent: 25px;
      font-size: 16px; 
  }
  .const {
    color: rgb(220, 20, 60); /* text color with rgb */
    font-size: 40px; 
    background-color: #FFD500; /* text highlight color */
    text-align: center;
  }
</style>


<div class="const"> PAGE UNDER CONSTRUCTION </div>

<br>

<h3> Sode Lab: </h3>
<div class="container">

<br>

Principal Investigator: Dr. Olaseni Sode

<br><br>

Theoretical computational chemistry and vibrational spectroscopy.</div>

<br>

<div class="container">
<img src="https://i.ibb.co/YLX2tXt/gif-bending.gif" alt="gif-bending" width="400">
<br>
<p2>Image: A degenerate bending mode of CO<sub>2</sub>
</p2>
</div>

<br>

<p>
My current work is in Dr. Olaseni Sode’s laboratory research group. Our goal is to characterize weakly attracted Van der Waals (vdW) complexes of CH<sub>4</sub>-CO<sub>2</sub> and Rg-CO<sub>2</sub> (Rg = He, Ne, Kr, Xe) using theoretical quantum vibrational computational chemical methods and machine learning. Understanding these weakly attracted complexes can help to further elucidate chemical bonding and molecular dynamics. We used ab initio computer software to optimize the geometry of these vdW complexes and calculated vibrational frequencies using Hartree-Fock, Moller-Plesset Perturbation, and Configuration interactions at the CCSD(T)-f12 level of theory, constructed a potential energy surface using our calculated data and analyzed the data using statistical regression techniques and machine learning. </p>

<br>

<h3> Ba Lab: </h3>
<div class="container">
<br>

Principal Investigator: Dr. Yong Ba

<br><br>

Synthesis and Characterization of $\beta$-clyclodextrin clathrate structures for the inclusion of anti cancer molecules such as sorafineb.</div>

<br>
<div class="container">
<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Cyclodextrin.svg" title="beta-cyclodextrin" width="800" >
</div>
<p2>Image: The typical family of cyclodextrins. In the center we have beta cyclodextrin. Image from wikipedia's <a href="https://en.wikipedia.org/wiki/Cyclodextrin">cylodextrin</a> page.</p2>
<br>

<p>In Dr. Yong Ba’s laboratory, our research goal was to synthesize molecular linkers for β-cyclodextrin to create dimerized clathrates for the inclusion of nonpolar anti-cancer molecules such as Sorafenib for targeted delivery in the human body. Inclusion of Sorafenib in β-cyclodextrin results in improved solubility and reduction of systemic toxicity and side effects of Sorafenib. I learned to organize and analyze synthetic methods for synthesizing compounds and analyzed said compounds using NMR and MALDI-TOF. I presented a poster on this research in 2018 at the American Chemical Society's Conference in Boston. </p>

<br>

<h3> Hayes Lab: </h3>
<div class="container">

<br>

Principal Investigator: Dr. Micheal L. Hayes


<br><br>

Characterization of RNA editing in plants. 

<br> <br>

<img src="https://i.ibb.co/3MCYxF2/crisprcas13.jpg" alt="crisprcas13" width="500">

<br>
Image: <a href="https://www.uniprot.org/uniprot/P0DPB8">A uniprot</a> cartoon of CRISPR/Cas13, a popular RNA editing alternative to CRISPR/Cas9
</div>

<br>

<p>In Dr. Michael Hayes laboratory, our research goal was to investigate RNA editing and processing mechanisms for the advancement of agricultural science. Unlike DNA editing, nucleotide sequence changes to RNA are transient which makes RNA editing safer and less prone to the long-term hazards of off-target editing. RNA editing mechanisms can be engineered to fix genetic diseases caused by mutations in humans and plants. I performed separations using size exclusion and ion-exchange chromatography and analyzed fractionated extractions using SDS-PAGE, and protein immunoblots. </p>

<br>

<div class="container">
<h4>For information about conferences and presentations please see my <a href="/about/">about-me</a> page.</h4>
</div>

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
