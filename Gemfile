source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# gem "jekyll", "~> 4.2.2" # commented out for github dark theme Dec-2025

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~>2.5" # commented out for github dark theme Dec-2025

#gem "minima", git: "https://github.com/jekyll/minima"
#gem "minima", git: "https://github.com/lrodrz/minima"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# ORIGINAL:
gem "github-pages", group: :jekyll_plugins
# uncommented the above to get dark github pages theme. Dec-2025

#FROM GIHUB GUIDE:
#https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll
#gem "github-pages","~> 225", group: :jekyll_plugins

gem "jekyll-theme-midnight"

# If you have any plugins, put them here!
group :jekyll_plugins do
  # gem "jekyll-feed", "~> 0.12" # from minima setup changed Dec-2025
    gem "jekyll-feed"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.7"


# JEKYLL / GITHUB PAGES UPDATE GUIDE
#
# When changing themes or plugins:
# 1) Update _config.yml (remote_theme, plugins list)
# 2) Make sure every plugin in _config.yml exists in this Gemfile
#
# After editing this file:
#   bundle clean --force
#   bundle install
#
# To run locally:
#   bundle exec jekyll serve --livereload
#   http://localhost:4000
#
# Notes:
# - github-pages pins compatible Jekyll + plugin versions
# - Do NOT also pin `jekyll` when using github-pages
# - GitHub Pages auto-builds on push; local build is only for preview
#
# Common errors:
# - "cannot load such file" → gem missing from Gemfile
# - _config.yml changes require restarting the server
