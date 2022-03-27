---
layout: post
title:  "Website Updates"
date:   2022-03-27 00:00:18 -0700
categories: updates
---
<style type="text/css" media="screen">
  .container {
    margin: 10px auto;
    max-width: 600px;
    text-align: center;
  }
  h1 {
    margin: 30px 0;
    font-size: 4em;
    line-height: 1;
    letter-spacing: -1px;
  }
</style>

<div class="container">
  <a title="My Morning Coffee" href="https://i.postimg.cc/sfMwPpZg/IMG-6365.jpg"><img width="700" alt="My Morning Coffee &amp; Morning Coffee" src="https://i.postimg.cc/sfMwPpZg/IMG-6365.jpg"></a>
</div>

<!-- 
INSERT PICTURE ABOVE: It's all setup to allow for centering. 
 -->


## Updates
Well today's work has been one of installing a bunch of ruby files and dependencies and then trying to figure out the subtleties of setting up the website. 

I used the following guides to set up the website: 

<a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll">Github-Pages Guide</a>

<a href="https://jekyllrb.com/docs/"> Jekyll Quickstart Guide</a>

## Upcomming:

The next thing to do after finishing up this website is to add some more information about myself and my background and talk about my current projects in machine learning. 

The two that I will hopefully be able to get to asap are 52predict and another based on my current research in Dr. Sodes lab in vibrational frequencies. 

Another thing that I want to work on in the machine learning landscape is to make a predictor for gene editing. I will put some thought into this as far as finding out how to put in inputs and outputs but hopefully later I will have something to begin coding. 



## Issues: 

I'm Having a problem with the following in my gemfile. When following the github guide for using github-pages. 

{% highlight ruby %}
gem "github-pages", group: :jekyll_plugins
{% endhighlight %}

I received the following as an output from zsh macOS terminal: 

{% highlight shell %}
Bundler could not find compatible versions for gem "jekyll-feed":
  In snapshot (Gemfile.lock):
    jekyll-feed (= 0.16.0)

  In Gemfile:
    github-pages was resolved to 36, which depends on
      jekyll-feed (= 0.2.3)

    minima (~> 2.5) was resolved to 2.5.1, which depends on
      jekyll-feed (~> 0.9)

Running `bundle update` will rebuild your snapshot from scratch, using only
the gems in your Gemfile, which may resolve the conflict.

Bundler could not find compatible versions for gem "kramdown":
  In snapshot (Gemfile.lock):
    kramdown (= 2.3.2)

  In Gemfile:
    github-pages was resolved to 8, which depends on
      kramdown (= 1.0.2)

    minima (~> 2.5) was resolved to 2.5.1, which depends on
      jekyll (>= 3.5, < 5.0) was resolved to 4.2.2, which depends on
        kramdown (~> 2.3)

Running `bundle update` will rebuild your snapshot from scratch, using only
the gems in your Gemfile, which may resolve the conflict.
{% endhighlight %}

I haven't been able to find much in the way of an solution for this issue so for now what seems to work is just setting everything back into the original theme and leaving it as is for now. 