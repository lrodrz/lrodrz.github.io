---
layout: post
title:  "Website Updates"
author: Larry Rodriguez
date:   2022-05-28 00:00:18 -0700
categories: updates
---


<style type="text/css" media="screen">
  .container {
    text-align: center;
  }
  p { text-indent: 25px; }
</style>

<div class="container">
  <a title="My Morning Coffee" href="https://i.postimg.cc/sfMwPpZg/IMG-6365.jpg"><img width="700" alt="My Morning Coffee &amp; Morning Coffee" src="https://i.postimg.cc/sfMwPpZg/IMG-6365.jpg"></a>
</div>



<br>
## Updates

<h4> <u> <i> May 28, 2022: </i>  </u> </h4>

I have finished my about me page. This week I attended a virtual conference at Los Alamos National Laboratory on "Machine Learning in Chemical and Materials Sciences". I learned a lot about what is being used in the landscape currently, so will be finally putting a dent in the article about machine learning mathematics page that I started too long ago. 

<h4> <u> <i> March 31, 2022: </i>  </u> </h4>
<p>
Today I'm trying to have a more interactive feed in my `/research/`
page. In doing so, I'm having to figure out what is going on with the liquid language for fetching tags. I got a little confused by the way it was explained over at the jekyll main page but I think I have the gist down. 

So, in the top of each page I have some code to setup the page. For example, the code I currently have on the top of this page is: 
</p>

{% highlight markdown %}
---
layout: post
title:  "Website Updates"
author: Larry Rodriguez
date:   2022-03-27 00:00:18 -0700
categories: updates
---
{% endhighlight %}
<br>
<p>
So, I want to have a small interactive feed based on each category. To begin to do this I need those tags. Now, If I were to simply create a liquid loop that prints out what is in `site.categories` then I will grab all the pages. I noticed that the category is conveniently placed at the front of the html document. So, for each iteration in categories to get a list of all the categories I simply use the following code. 
</p>
<br>
{% highlight liquid %}
{% raw %}
{% for category in site.categories %}
  {{category[0]}}
{% endfor %}
{% endraw %}
{% endhighlight %}
<br>

The code that I ended up using is the following:
<br> 

{% highlight liquid %}
{% raw %}
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
{% endraw %}
{% endhighlight %}

<br>
<p>
Its probably not very elegant, but I thought that having just the date and the title was good enough for the moment. I want to be able to add a description element to each of the iterative posts that are retrieved, so I have to figure out some way of adding this as an element to put into each markdown file for each post so that it can be called by liquid during retrieval. 
</p>
<h4> <u> <i> March 27, 2021: </i>  </u> </h4>
Well today's work has been one of installing a bunch of ruby files and dependencies and then trying to figure out the subtleties of setting up the website. 

I used the following guides to set up the website: 

<a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll">Github-Pages Guide</a>

<a href="https://jekyllrb.com/docs/"> Jekyll Quickstart Guide</a>

## Upcomming:
<p>
The next thing to do after finishing up this website is to add some more information about myself and my background and talk about my current projects in machine learning. 

The two that I will hopefully be able to get to asap are 52predict and another based on my current research in Dr. Sodes lab in vibrational frequencies. 

Another thing that I want to work on in the machine learning landscape is to make a predictor for gene editing. I will put some thought into this as far as finding out how to put in inputs and outputs but hopefully later I will have something to begin coding. 
</p>



## Issues: 

<h4> <u> <i> March 27, 2021: </i>  </u> </h4>


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