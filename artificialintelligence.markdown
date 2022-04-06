---
layout: page
title: "Machine-Learning"
permalink: /artificialintelligence/
---

<style type="text/css" media="screen">
  .const {
    color: rgb(220, 20, 60); /* text color with rgb */
    font-size: 40px; 
    background-color: #FFD500; /* text highlight color */
    text-align: center;
}
</style>


<div class="const"> PAGE UNDER CONSTRUCTION </div>

<br>

<h1>Artificial Intelligence and Machine Learning</h1>

<body>Welcome to my Page on Artificial Intelligence and Machine Learning. I just got this website up this month so please be patient while I get this page ready and construct the website. I'm excited to share my experience and knowledge in machine learning.</body>

<br>

I'm currently working from <a href="https://read.amazon.com/kp/embed?asin=B07XGF2G87&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_5QNGJAB2RD3K6TF6WXB9">Aurelien Geron's Hands-on Machine Learning with Scikit-Learn, Keras & Tensorflow</a>

<br>

Projects to work on: 

1.) Classification 

2.) Regression

3.) Deep Learning (NLP)

4.) Deep Learning (Computer Vision)

5.) Clustering


<br>

<h3> Recent Machine Learning Posts: </h3>


{% for machinepost in site.categories.machine-learning %}
  <h4> <a href="{{machinepost.url}}">
  --- &nbsp; &nbsp; 
  {{machinepost.date | date: "%a, %B %d, %Y" }}
  :
  &nbsp;
  {{machinepost.title}}
  </a> 
  </h4>
  <br>
{% endfor %}
