# Larry's Blog

The source for Larry Rodriguez's personal blog about computational biophysics,
molecular simulation, artificial intelligence, chemistry, gene editing, and
related research.

## Ubuntu installation with Conda

From the repository root, create the `blog` environment and install the locked
Jekyll dependencies:

```bash
conda create --yes --name blog --channel conda-forge --override-channels \
  ruby=3.2.2 make compilers pkg-config
conda activate blog
gem install bundler --version 2.5.5 --no-document

# Make conda-forge's RubyGems launchers resolve the environment's Ruby binary.
ln -sfn ../../../bin/ruby "$CONDA_PREFIX/share/rubygems/bin/ruby"

bundle _2.5.5_ install
```

Start the local site and open <http://localhost:4000>:

```bash
conda activate blog
bundle exec jekyll serve --livereload
```

Use `conda deactivate` when you are finished. On later sessions, only
`conda activate blog` and the Jekyll command are needed.

Repository Structure:
```
\____main
|
|____editing
```



If you're reading this you're probably at my github page:

https://github.com/lrodrz/lrodrz.github.io

The published blog is available at:

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

Launch the blog locally:

$`bundle exec jekyll serve`

or 

$`bash blogstart.sh`



If you would like to build a similar blog, here is some information about how I put together this GitHub Pages site.

<br>

The blog was built using Jekyll and the following guide:
https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll

The standard Jekyll directory structure can be found at: 

https://jekyllrb.com/docs/structure/


## Features: 


<b><u>December 2025:</b></u>

Comments are available on blog posts so readers can leave feedback and discuss the topics covered.

I'm planning on using the utterances repository: https://utteranc.es/

As the archive grows, I may add ways for readers to support tutorials and other useful material.

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
