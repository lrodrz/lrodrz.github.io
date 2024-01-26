---
layout: page
title: "Artificial-Intelligence"
permalink: /artificialintelligence/
use_math: true
---

<style type="text/css" media="screen">
  .center {
    text-align: center;
  }
  p { text-indent: 25px;
      font-size: 16px; 
  }
</style>

<br>

<!-- Professional Socials -->
<div class="center">

<a href="https://orcid.org/0000-0002-2527-7204">
    <img alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" width="16" height="16" />
    Larry Rodriguez
</a> |
<a href="https://github.com/lrodrz">
    <img alt="GitHub logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="16" height="16" />
    lrodrz
</a> |
<a href="https://www.linkedin.com/in/larry-r-073154203">
    <img alt="linkedinlogo" src="https://i.ibb.co/d25fhd6/In-Blue-96-2x.png" width="16" height="16" />
    Larry Rodriguez
</a> |
<a href="https://docs.google.com/document/d/1-94z5pGH82ASRE35aLlTAT7hAanZYivD/edit?usp=sharing&ouid=105026313310214492121&rtpof=true&sd=true">📄CV</a>

</div>
<!-- end Professional Socials -->

<br>

<h1>Artificial Intelligence and Machine Learning</h1>

Thank you for visiting my page on Artificial Intelligence (AI) and Machine Learning. Here, I will provide an overview of the various AI tools that I have explored and delve into the foundations of machine learning. As I continue to progress in my career, I will also explore and expand upon the latest AI tools, such as deep learning. 

Artificial Intelligence (AI) is a term that widely applies to a wide range different technologies and techniques. The term can be applied from basic statistical tools like linear regression to the newest neural network architectures called ‘deep learning’. The general definition of AI today states that is a branch of computer science that attempts to simulate human intelligence. 
In my own personal journey, I have found that AI algorithms are specialized tools for scientific discovery. This means that while generative AI systems like OpenAI’s ChatGPT can recreate human writing, they are not mobile like Boston Dynamics’ Spot robot. Each AI tool can handle a specific task based on the information given to it or the design of its architecture/ algorithm.  
As a part of my formal training, I have explored several AI tools for my research. Here I will attempt to talk about the various statistical techniques, algorithms, neural networks, as well as machine learning algorithms that I have experience in as well as some applications that I have explored with them. 

<noind>
As I update this page and blog over time, I hope to cover the following topics in artificial intelligence
</noind>

<br>

<img align="right" width=320 src="https://i.postimg.cc/nz3yxW2D/93a9ec68-0f2b-47ca-8b1a-42675cad182a.jpg">
1. Brief History of Artificial Intelligence (AI)
2. Statistical Fundamentals of AI
3. Basic Machine Learning (ML) <br>
&nbsp;a. k-means 
4. Neural Networks (NNs) <br> 
&nbsp;a. e3nn <br>
&nbsp;b. deep learning <br>
&nbsp;c. DeepMind
5. AI Ethics
6. AI and Societal Implications
7. Generative AI (ChatGPT, DALL-E [i.e., image generated on the right])
8. General Artificial Intelligence (AGI)
9. ML and NNs for quantum chemistry/simulation accelaration

<br>

# Statisical Fundamentals of AI

To begin our exploration into AI, we will look at a simpler case of analysis of variance (ANOVA). ANOVA is a statistical method used to compare the means of three or more groups of data. Below we have an example of iron concentrations at different depths. Basic statistical methodology dictates using plots to analyze the data followed by using a statistical tool like ANOVA to test the differences in means among the different groups. 
Here is the code to plot the data using ggplot

{% highlight r %}
# plot box plots
plt = ggplot(iron, aes(x=depth, y=iron, fill=depth)) +
  geom_boxplot() + 
  theme(legend.position='none',
        plot.title = element_text(hjust = 0.4),
        panel.background = element_rect(fill = "white",colour = "grey50")) +
  labs(title='Iron Concentrations at Different Depths') +
  xlab('Depth (ft)') + ylab('Iron Concentration (mg/L)')
plt
{% endhighlight %}

This code generates the box plots, shown below, of iron concentrations at different depths. The data is stored in a data frame called iron. The aes() function maps the depth variable to the x-axis and the iron variable to the y-axis. The fill parameter is set to depth, which colors the boxes based on the depth. The geom_boxplot() function creates the box plot. The theme() function is used to customize the appearance of the plot, such as removing the legend and setting the background color. The labs() function is used to add a title to the plot. The xlab() and ylab() functions are used to label the x-axis and y-axis, respectively. Finally, the plt object is printed to display the plot.

<img img src="https://i.postimg.cc/MpT7YZ2Z/Screenshot-2024-01-22-111743.png">

We then use ANOVA, in this case ANOVA in the glm package on R is used compare the means of the iron concentration samples at the different depths. 

{% highlight r %}
# using glm model to check for differences between the groups
statmodel = glm(iron ~ depth, family=gaussian, data=iron)
anova(statmodel, test='F')
{% endhighlight %}


The code satmodel = glm(iron ~ depth, family=gaussian, data=iron) fits a linear regression model to the data frame iron with iron as the dependent variable and depth as the independent variable. The family parameter is set to gaussian, which specifies that the response variable follows a Gaussian distribution. The resulting model is stored in the object satmodel.

The anova(statmodel, test='F') function performs an analysis of variance (ANOVA) on the fitted model statmodel. The test parameter is set to 'F', which specifies that an F-test should be used to test the null hypothesis that all coefficients in the model are equal to zero. The ANOVA table shows the sum of squares, degrees of freedom, mean squares, and F-statistic for each term in the model, as well as the overall model fit. The p-value associated with the F-statistic is used to determine whether the model is a good fit for the data. If the p-value is less than a specified significance level (e.g., 0.05), then the null hypothesis is rejected, indicating that at least one of the coefficients in the model is significantly different from zero

The printout from the glm model showed the following 

```
## Analysis of Deviance Table
## 
## Model: gaussian, link: identity
## 
## Response: iron
## 
## Terms added sequentially (first to last)
## 
## 
##       Df Deviance Resid. Df Resid. Dev      F    Pr(>F)    
## NULL                     19   0.091224                     
## depth  5  0.08524        14   0.005984 39.884 8.517e-08 ***
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
```

The output from the model shows a very low p-value for the depth response variable. This means that there is a significant difference in the means between one of the groups. It is standard practice to check with addtional tools to check the reiduals to see if this was an appropriate application of ANOVA. 

Now, let's take a look under the hood of this particular statistical model. The particular method used in this case was repeated measures ANOVA which is a commonly used statstical tool and according to oregon state university professor Charlotte Wickham is a special case of multiple linear regression. 

According to libretexts.com, ANOVA models are derived under the assumption of linearity of model parameters and follow the generalized linear model (glm) as 

<!-- LaTeX Math -->
<div class="center">
<h4> $ Y = X\beta + \varepsilon $ </h4>
</div>

In this equation we have the $E(Y)$ which is known as the 'link function' which according to statisticalhowto.com the link function maps a generalized linear model to a linear one. $Y$ itself is the response variable which is each outcome of the dependent varaibles generated from a particular distribution (i.e. exponential, Poisson, gaussian). $X\beta$ is the linear predictor which is a linear combination of unknown parmeters $\beta$ and $\varepsilon$ is the error term. 


To describe some fundamental ANOVA I will go over two-factor ANOVA. The saturated two-factor ANOVA model is

<!-- LaTeX Math -->
<div class="center">
<h4> $ E(Y_{jkl}) = \mu + \alpha_j + \beta_k + (\alpha\beta)_{jk} $ </h4>
</div>

Here, we have the response variable $E(Y_{jkl})$ for the $i^\text{th}$ level of factor A, the $j^\text{th}$ level of factor B, and the $k^\text{th}$ observation. $\mu$ is the overall mean of the response variable. 

$\alpha_i$ is the 'main effect' of the $i^\text{th}$ level of $\alpha$. $\beta_j$ is the main effect of the $j^{th}$ level of $\beta$. $(\alpha\beta)_{ij}$ is the interaction effect between the $i^\text{th}$ level of the main effect $\alpha$ and the $j^\text{th}$ level of the main effect $\beta$. The main effect is the effect of an independent variable on the dependent variable. 

We have observed that statistical models can be used to infer information about our research samples. This is a simple example of how the foundational topics in mathematical models can help us gain insights into the research questions we are trying to answer.

For more information about this method, check out Dobson, A. J. (1990) An Introduction to Generalized Linear Models. London: Chapman and Hall.

# Machine Learning 

According to Wikipedia’s page on machine learning (ML), ML is the study of computational algorithms concerned with the development of statistical algorithms to learn from and generalize on unseen data thus performing tasks without supervision. We have seen from our earlier talk on ANOVA that we can use statistical models to infer information about data that we are analyzing. Throughout my research, I have gained exposure to various machine learning techniques. In this section, I will provide a brief overview of a model that I utilized during my research.  


For a comprehensive introduction to machine learning, I reccommend <a href="https://read.amazon.com/kp/embed?asin=B07XGF2G87&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_5QNGJAB2RD3K6TF6WXB9">Aurelien Geron's Hands-on Machine Learning with Scikit-Learn, Keras & Tensorflow</a>


<h3> Recent Machine Learning Posts: </h3>

{% for machinepost in site.categories.machine-learning %}
  <h4> <a href="{{machinepost.url}}">
  --- &nbsp; &nbsp; 
  {{machinepost.date | date: "%a, %B %d, %Y" }}
  :
  &nbsp;
  {{machinepost.title}}
  </a> 
  </h4>
  <br>
{% endfor %}
