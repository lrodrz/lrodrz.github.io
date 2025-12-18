---
layout: post
title:  "Darktheme Update"
author: Larry Rodriguez
date:   2025-12-18 02:50:18 -0700
categories: updates
---


<style type="text/css" media="screen">
  p { text-indent: 25px; }
  .center {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
</style>


Its finally done! I got the dark theme to work! I found a theme on github pages that I was comfortable enough with and with a little bit of extra time on my hands and some help with AI I got this site to be in a dark theme and cleaned it up. 

<h2>
Technical Summary of Updates: 
</h2>

So today, I migrated from minima theme to midnight theme and used the github pages version. I didn't use the remote version that was mentioned in the midnight theme github. I actually had to play with it a bit and with some discussion with chatGPT I got it to run. Currently as of December of 2025 you should be able to check my `_config.yml` file. All things I did there had to be updated along with the `Gemfile` which turned out to be tedious as well. 

The key detail that changed it for me was to not use the remote theme but instead used just the theme as below: 

{% highlight yaml %}
theme: jekyll-theme-midnight
plugins:
- jekyll-feed
{% endhighlight %}

Additionally, I had to create this new file in `assets/css/style.css` which I then just customized a bunch to get it all nice looking and robust enough for mobile viewing as well. 
Then I had to make this `_layouts` directory so that this theme can deal with some of the layout differences between the old minima theme and the new Midnight theme. 
And finally I had to update all of the individual pages to reflect the new changes. 

I think this was certainly a very long and tedious process to get this dark theme to roll out but its only gotta get done once and I can continue on with just posting more posts and not having to do site maintainence. Especially considering that I do not have to host this site myself. It is all being done via GitHub Pages. 

Alrighty, well that is all I have for now. This took a little bit but I am very happy I was able to get it done. Time to publish this and cross my fingers. Next update, I will be adding comments via utterances!

<noindent>
I have compiled all the relevant urls that I and AI used to get this done below: 
<br>
<br>

<div class=center>
<!-- Theme & GitHub Pages -->
<h3>Jekyll Themes and GitHub Pages</h3>
<ul>
  <li>
    <strong>GitHub Pages Themes</strong><br>
    <a href="https://pages.github.com/themes/" target="_blank" rel="noopener">
      https://pages.github.com/themes/
    </a>
  </li>
  <li>
    <strong>Midnight Theme Repository</strong><br>
    <a href="https://github.com/pages-themes/midnight" target="_blank" rel="noopener">
      https://github.com/pages-themes/midnight
    </a>
  </li>
  <li>
    <strong>GitHub Pages + Jekyll Setup</strong><br>
    <a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll" target="_blank" rel="noopener">
      https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll
    </a>
  </li>
</ul>

<!-- Bundler & Dependencies -->
<h3>Bundler and Dependency Management</h3>
<ul>
  <li>
    <strong>Using Bundler</strong><br>
    <a href="https://bundler.io/guides/using_bundler.html" target="_blank" rel="noopener">
      https://bundler.io/guides/using_bundler.html
    </a>
  </li>
  <li>
    <strong>GitHub Pages Ruby Gem</strong><br>
    <a href="https://github.com/github/pages-gem" target="_blank" rel="noopener">
      https://github.com/github/pages-gem
    </a>
  </li>
</ul>

<!-- Jekyll Structure -->
<h3>Jekyll Layouts, Includes, and Structure</h3>
<ul>
  <li>
    <strong>Jekyll Layouts</strong><br>
    <a href="https://jekyllrb.com/docs/layouts/" target="_blank" rel="noopener">
      https://jekyllrb.com/docs/layouts/
    </a>
  </li>
  <li>
    <strong>Front Matter</strong><br>
    <a href="https://jekyllrb.com/docs/front-matter/" target="_blank" rel="noopener">
      https://jekyllrb.com/docs/front-matter/
    </a>
  </li>
  <li>
    <strong>Jekyll Includes</strong><br>
    <a href="https://jekyllrb.com/docs/includes/" target="_blank" rel="noopener">
      https://jekyllrb.com/docs/includes/
    </a>
  </li>
  <li>
    <strong>Jekyll Directory Structure</strong><br>
    <a href="https://jekyllrb.com/docs/structure/" target="_blank" rel="noopener">
      https://jekyllrb.com/docs/structure/
    </a>
  </li>
</ul>

<!-- Liquid -->
<h3>Liquid Templating</h3>
<ul>
  <li>
    <strong>Jekyll Variables</strong><br>
    <a href="https://jekyllrb.com/docs/variables/" target="_blank" rel="noopener">
      https://jekyllrb.com/docs/variables/
    </a>
  </li>
  <li>
    <strong>Liquid Basics</strong><br>
    <a href="https://jekyllrb.com/docs/liquid/" target="_blank" rel="noopener">
      https://jekyllrb.com/docs/liquid/
    </a>
  </li>
</ul>

<!-- CSS & Layout -->
<h3>CSS Layout and Styling</h3>
<ul>
  <li>
    <strong>CSS Flexbox Guide</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
    </a>
  </li>
  <li>
    <strong>Responsive Web Design</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
    </a>
  </li>
  <li>
    <strong>CSS Media Queries</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Web/CSS/@media
    </a>
  </li>
</ul>

<!-- Typography -->
<h3>Typography and Text Styling</h3>
<ul>
  <li>
    <strong>CSS font-size</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
    </a>
  </li>
  <li>
    <strong>CSS letter-spacing</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
    </a>
  </li>
</ul>

<!-- Images -->
<h3>Images and Backgrounds</h3>
<ul>
  <li>
    <strong>CSS background</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Web/CSS/background
    </a>
  </li>
  <li>
    <strong>HTML img Element</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
    </a>
  </li>
</ul>

<!-- General -->
<h3>General Jekyll & CSS References</h3>
<ul>
  <li>
    <strong>Jekyll Usage Guide</strong><br>
    <a href="https://jekyllrb.com/docs/usage/" target="_blank" rel="noopener">
      https://jekyllrb.com/docs/usage/
    </a>
  </li>
  <li>
    <strong>MDN CSS Learning Path</strong><br>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank" rel="noopener">
      https://developer.mozilla.org/en-US/docs/Learn/CSS
    </a>
  </li>
</ul>

</div>
