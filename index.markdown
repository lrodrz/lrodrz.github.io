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

<h2><u>Welcome to Larry's Blog</u></h2>

I launched this blog on March 27, 2022 to document my journey as a computational biophysicist and theoretical computational chemist. Here I share research and career updates, explain topics I am learning, and keep a chronological record of my work. To learn more about me, visit the "About Me" page. My main research areas remain available as topic pages in the header.

<h2><u>Join the Conversation</u></h2>
Comments are available on blog posts through <a href="https://utteranc.es/" target="_blank" rel="noopener noreferrer">Utterances</a>. Constructive criticism, questions, and feedback are welcome.

<h2><u>Featured Picture: </u></h2>
<!-- picture paragraph -->
<p>

This month I am showcasing a picture of the Fox Theater in Bakersfield, CA. This theater is in the heart of Bakersfield's downtown district just down the street from the Padre Hotel which is also another Bakersfield landmark. Since I visited the fox recently for a show, I decided to snap a photo to commemorate the moment. 

</p>
<!-- end picture paragraph -->


<h2><u>About the Blog</u></h2>
<!-- no ind is defined above, its for indentation -->
<noind> 
To learn how the blog is built or browse its source, visit the <a href="https://github.com/lrodrz/lrodrz.github.io">Larry's Blog repository</a> on GitHub.
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



