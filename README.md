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

## Create a new post

The quickest path is the interactive launcher. It needs nothing but `bash` — no
Conda or Ruby — and prompts you through every field with a numbered category menu
(Artificial Intelligence, Molecular Dynamics, Biophysics, Genetic Engineering,
Chemistry, Updates) plus yes/no toggles for math, table of contents, and comments:

```bash
./scripts/new-post.sh
```

A flag-based Ruby generator is also available for scripting:

```bash
conda activate blog
ruby scripts/new_post.rb "A clear post title" \
  --description "A concise homepage and search summary." \
  --category research \
  --tags molecular-dynamics,crispr \
  --math
```

Both refuse invalid dates, empty titles, and filename collisions. Posts no longer
need a per-post `<style>` block — paragraph indentation and `.container` image
centering live in `assets/css/style.scss`, and math is enabled by the
`use_math: true` flag. See [`docs/POST_AUTHORING.md`](docs/POST_AUTHORING.md) for
all options, image fields, preview instructions, and the front-matter contract.

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


<b><u>June 2026:</b></u>

Refactored the site onto a Hux-inspired custom theme. The `_layouts`, `_includes`,
and `_sass`/`assets` directories now live in the repo and are version-controlled
directly (no longer hidden inside an external theme gem).

Added an interactive post scaffolder, `scripts/new-post.sh`. It runs in pure
`bash` (no Conda/Ruby needed), offers a numbered category menu, and toggles math,
table of contents, and comments per post.

Removed the per-post `<style>` block. Paragraph indentation and `.container` image
centering are now defined once in `assets/css/style.scss`, so every post inherits
them automatically.

Repaired MathJax. The retired `cdn.mathjax.org` endpoint was replaced with
MathJax 3 served from jsDelivr (`_includes/mathjax_support.html`), so LaTeX now
renders again on any post with `use_math: true`.


<b><u>December 2025:</b></u>

Comments are available on blog posts so readers can leave feedback and discuss the topics covered.

I'm planning on using the utterances repository: https://utteranc.es/

As the archive grows, I may add ways for readers to support tutorials and other useful material.

https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository

Shipped a dark theme. The site first migrated to the Midnight theme and has since
moved to the custom Hux-inspired theme described in the June 2026 notes above.

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

<b>Note (historical):</b> This site was originally bootstrapped from `jekyll new`
on the minima theme, where `_layouts`, `_includes`, and `_sass` lived inside the
theme gem rather than the repo. To get LaTeX support back then, the `_includes`
folder (including the MathJax support HTML) was vendored into the repo. As of the
June 2026 refactor the site runs a fully self-contained custom Hux-inspired theme,
so all of those directories are version-controlled here directly, and MathJax is
loaded from MathJax 3 on jsDelivr.
