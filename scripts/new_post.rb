#!/usr/bin/env ruby

require "date"
require "fileutils"
require "optparse"
require "yaml"

options = {
  author: "Larry Rodriguez",
  categories: [],
  comments: true,
  date: Date.today,
  directory: "_posts",
  hero_image: "/assets/images/placeholders/post-hero.svg",
  tags: [],
  toc: true,
  use_math: false
}

parser = OptionParser.new do |opts|
  opts.banner = "Usage: ruby scripts/new_post.rb TITLE [options]"
  opts.on("--subtitle TEXT", "Optional post subtitle") { |value| options[:subtitle] = value.strip }
  opts.on("--description TEXT", "Search and social summary") { |value| options[:description] = value.strip }
  opts.on("--category NAME", "Category (repeatable)") { |value| options[:categories] << value.strip }
  opts.on("--tags LIST", "Comma-separated tags") { |value| options[:tags].concat(value.split(",").map(&:strip)) }
  opts.on("--date YYYY-MM-DD", "Publication date") { |value| options[:date] = Date.iso8601(value) }
  opts.on("--hero PATH", "Hero image path or URL") { |value| options[:hero_image] = value.strip }
  opts.on("--math", "Enable MathJax") { options[:use_math] = true }
  opts.on("--no-toc", "Disable the generated table of contents") { options[:toc] = false }
  opts.on("--no-comments", "Disable Utterances for this post") { options[:comments] = false }
  opts.on("--directory PATH", "Output directory (defaults to _posts)") { |value| options[:directory] = value }
end

begin
  parser.parse!
rescue Date::Error, OptionParser::ParseError => error
  warn "Error: #{error.message}"
  warn parser
  exit 1
end

title = ARGV.join(" ").strip
if title.empty?
  warn "Error: a non-empty post title is required."
  warn parser
  exit 1
end

slug = title.downcase.gsub(/[^a-z0-9]+/, "-").gsub(/\A-|\-\z/, "")
if slug.empty?
  warn "Error: the title must contain at least one letter or number."
  exit 1
end

FileUtils.mkdir_p(options[:directory])
filename = "#{options[:date].iso8601}-#{slug}.markdown"
path = File.join(options[:directory], filename)

if File.exist?(path)
  warn "Error: #{path} already exists; no file was changed."
  exit 1
end

metadata = {
  "layout" => "post",
  "title" => title,
  "subtitle" => options[:subtitle],
  "description" => options[:description],
  "date" => options[:date].iso8601,
  "author" => options[:author],
  "categories" => options[:categories].reject(&:empty?).uniq,
  "tags" => options[:tags].reject(&:empty?).uniq,
  "hero_image" => options[:hero_image],
  "image_alt" => "Post hero image placeholder",
  "image_credit" => nil,
  "image_credit_url" => nil,
  "use_math" => options[:use_math],
  "toc" => options[:toc],
  "comments" => options[:comments]
}.compact

body = <<~MARKDOWN
  #{metadata.to_yaml}---

  Write the post introduction here.

  ## First section

  Continue writing here.
MARKDOWN

File.write(path, body)
puts "Created #{path}"
