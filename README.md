# Chronos Website 

Repository Structure:
```
\____main
|
|____editing
```



If you're reading this you're probably at my github page:

https://github.com/lrodrz/lrodrz.github.io

If you would like to view the website, the website is at: 

https://lrodrz.github.io

<br>
<h2><u>Information:</u></h2>
<br>

<b><h3>To build a local cloned repo:</h3></b>

Clone the repo:

$`git clone https://github.com/lrodrz/lrodrz.github.io.git`

You might want to use the editing branch to do edits: 

$`git checkout editing`

check if everything is up-to-date:

 $`git pull origin main editing`

Make sure you have jekyll installed. If not, there are guides available for your favorite operating system at:   https://jekyllrb.com/docs/installation/ 

setup the gems:

$`bundle install`

Launch the static site generator: 

$`bundle exec jekyll serve`

or 

$`bash chronos.sh`



In case you wanted to follow my footsteps and build your own website here is some information about how I put together this website/github-page.

<br>

The website was built using jekyll and the following guide: 
https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll

The standard Jekyll directory structure can be found at: 

https://jekyllrb.com/docs/structure/


## Features: 


<b><u>December 2025:</b></u>

Currently, I am going to work on adding comments to my website. This way I can get feedback, and perhaps some encouragement to continue adding more information to my blog. 

I'm planning on using the utterances repository: https://utteranc.es/

Also, perhaps as I get some tutorials or more information on this blog I will add a donation button to help people buy me a coffee or two if they feel like I helped them out. As a scientist, I do hope that my contributions make an impact in other's lives so this is a way to both get additional encouragment and measure the value that I am giving others out there. 

https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository

Possibly change the theme to dark theme: 

https://github.com/pages-themes/midnight?tab=readme-ov-file



<b><u>April 2022:</b></u> 

<u>Plotting:</u>

Might add some plotting capability. atm don't have much time but here's a nice link I found by Ethan Cheong.

https://ethan-cheong.github.io/plotly-in-jekyll/


<b><u>March 2022:</b></u> 

<u>LaTeX:</u>

Added Mathjax support using the following guides. This allows me to use LaTeX support so that I can write math equations in my posts. 

<br>

Used Fabrizio Musacchio's Guide for the general flow: 

https://www.fabriziomusacchio.com/blog/2021-08-10-How_to_use_LaTeX_in_Markdown/

<br>

My actual `mathjax_support.html` file uses the code I found from Ben Lansdell's How-To:

https://benlansdell.github.io/computing/mathjax/

<br>

<b>Note:</b> From jekylls website since I bootstrapped this website from a $`jekyll new` command from jekyll then `_layouts`, `_includes` and `_sass` are not to be found in my repo but are actually in my install files for the theme I'm using which is minima. Therefore I added all of the contents of `_includes` and the folder itself to my repo and along with the mathjax support html in order to get the LaTeX support that I wanted. After deploying the website I got the desired effect. 
