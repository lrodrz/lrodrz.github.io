---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
use_math: true
---

<style type="text/css" media="screen">
  .center {
  text-align: center;
}
p { text-indent: 25px;
    font-size: 16px; 
}
grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
}
noind {
  text-indent: 0;
}
</style>
<!-- Legend:           -->
<!-- noind = no indent -->
<!-- 
<div class="center">
<h1>Larry's Blog</h1>
</div> -->

<div class="center">
<img src="https://i.ibb.co/23q8Cs8n/IMG-1546.jpg" alt="foxtheabaker" title="FoxTheaterBakersfield" width=600>
<p><b>Picture:</b> The Bakersfield Fox Theater in Bakersfield, CA. My Hometown </p></div>
<!-- must put the p and div at the end of the sentence here  -->

<h2><u>A Kind Welcome: </u></h2>

Welcome to the blog! I launched this blog on March 27, 2022. This blog is intended to document my journey as a computational biophysicist and theoretical computational chemist. Here I plan to document my research and career progress. To learn more about me, please visit the "About Me" tab on the header bar of this website. I have also segmented my main research areas into separate pages that can be accessed from the header bar. 

<h2><u>Comments live! and Welcome!: </u></h2>
As of December 2025, I have enabled comments on my blog posts via the <a href="https://utteranc.es/" target="_blank" rel="noopener noreferrer">Utterances</a> repository. If you would like to leave a comment on any of my blog posts, please feel free to do so! I welcome all constructive criticism and feedback and am excited to engage with the community. 

<h2><u>Featured Picture: </u></h2>
<!-- picture paragraph -->
<p>

This month I am showcasing a picture of the Fox Theater in Bakersfield, CA. This theater is in the heart of Bakersfield's downtown district just down the street from the Padre Hotel which is also another Bakersfield landmark. Since I visited the fox recently for a show, I decided to snap a photo to commemorate the moment. 

</p>
<!-- end picture paragraph -->


<h2><u>Blog Details:</u></h2>
<!-- no ind is defined above, its for indentation -->
<noind> 
If you would like to know more about the sites construction and see the source code for the blog, check out my github repository at<a href="https://github.com/lrodrz">
    lrodrz
</a>
</noind>


<div class="recent-posts">
  <h2>Recent Posts</h2>

  {% for post in site.posts limit:5 %}
    <h4>
      <a href="{{ post.url | relative_url }}">
        {{ post.date | date: "%a, %B %d, %Y" }} — {{ post.title }}
      </a>
    </h4>
  {% endfor %}
</div>




