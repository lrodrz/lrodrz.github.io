---
layout: post
title:  "Machine Learning Projects"
date:   2022-04-04 09:56:18 -0700
categories: artificialintelligence
author: Larry Rodriguez
use_math: true
tags: "machine-learning"
# comments: false  # if you want to disable comments on a specific post
---

<style type="text/css" media="screen">
  .container {
    text-align: center;
  }
  p { text-indent: 25px;
      font-size: 17px;
    }
</style>

<br>

<div class="container">
<img src="https://i.ibb.co/NnyHsvm/coffeendcode.jpg" alt="coffee and code" title="coffee 'nd coding" width="650">
</div>

<br>

<h2>Current Machine Learning Projects:</h2> 


<h2><a href="https://github.com/lrodrz/52predict">52Predict</a></h2>

<h4>Description: A card counting predictor and machine learning project</h4>

<h2><a href="https://github.com/lrodrz/SentimentAnalysis">SentimentAnalysis</a></h2>

<h4>Description: Working off of the Sentiment Analysis section from Hands On book</h4>


<h2>Updates:</h2>

<h4><u>April 04, 2022</u>:</h4>

<h4><u><i>52Predict</i></u>:</h4>

52predict is one of my more ambitious projects. I coded a little bit of it after watching the movie <i>21</i>. At this point I have come up with a simple algorithm to give me a randomized set of the one-thousand cards distributed by numpys choice function. 

{% highlight python %}
def CardRandomizer():
    cards = ['ace','king','queen','jack','10','9','8','7','6','5','4','3','2']
    is_this_your_card = np.random.choice(cards,size=1000)
    with open('cards.csv','w') as fi_gen_counts:
        writer = csv.writer(fi_gen_counts)
        writer.writerow(is_this_your_card)
{% endhighlight %}

then using a simple high-low card counting algorithm I found online I made a loop that assigns a certain count as each card is 'flipped' (or looped over) by python. Here are the first few lines of the loop:

{% highlight python %}
   lIst_fi_hilo = []
    for list in csv_read:
        for card in list:
            if card == 'ace':
                count = count - 1
                print('card:   ',card,' | count: ' ,count)
                lIst_fi_hilo.append(count)
            elif card == 'queen':
                count = count - 1
                print('card: ',card,' | count: ' ,count)
                lIst_fi_hilo.append(count)
{% endhighlight %}

At this point, I still have many details of the game to work out in terms of being able to win games and such. In the meantime while I think of how to construct the neural network for this repo I am working on the following (below)

<h4><u><i>SentimentAnalysis</i></u>:</h4>

<p> I want to start building a neural network so I will begin with the sentiment analysis section from <a href="https://read.amazon.com/kp/embed?asin=B07XGF2G87&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_5QNGJAB2RD3K6TF6WXB9">Aurélien Géron's Hands-on Machine Learning with Scikit-Learn, Keras & Tensorflow</a>. So, working from chapter 16 and the <a href="https://github.com/ageron/handson-ml2">Hands On book public repository</a> I want to recreate the code in a repository and then build off of it to create a sentiment analyzer for earnings sentiment and use the stock market as a supervision tool. </p> 

<p2> Just blindly copying and running the code <a href="https://github.com/lrodrz/SentimentAnalysis/blob/main/SentimentAnalysis.ipynb">I got it to work</a> with just one depreciation warning. </p2>

<br>

{% highlight shell %}
    {% raw %}
WARNING:absl:Dataset is using deprecated text encoder API which will be removed soon.
Please use the plain_text version of the dataset and migrate to `tensorflow_text`.
    {% endraw %}
{% endhighlight %}

I found a fix from <a href="https://github.com/tensorflow/datasets/issues/2604">this post</a>, but at the moment its not working, will come back to this later. 

<br>

<p> Now, Let's analyze what is happening. I cleaned up the original notebook to only <a href="https://github.com/lrodrz/SentimentAnalysis/blob/main/Sentiment2.ipynb">the essentials</a> so I could analyze what was written. The first thing to notice, according to Géron, is that the IMDB data has already been tokenized where tokenization is the process of splitting text into smaller pieces called tokens <sub>[1]</sub>. This apparently comes from the <a href="https://en.wikipedia.org/wiki/Tokenization_(data_security)">data security sector</a> where each token takes the data that is assigned to it and replaces it with some other encoding in order to save space and computational capacity without sacrificing the meaning behind the thing being tokenized <sub>[2] [3]</sub>. </p>

<p>Now let's take a look at Géron's code: </p>

<p>Here we have our boilerplate imports and dataset import (running this only on google colab gives me no error, so I think this might be an error on githubs side?)</p>

{% highlight python %}

# TensorFlow ≥2.0 is required
import tensorflow as tf
from tensorflow import keras
assert tf.__version__ >= "2.0"

# Common imports
import numpy as np
import os

# to make this notebook's output stable across runs
np.random.seed(42)
tf.random.set_seed(42)

import tensorflow_datasets as tfds

datasets, info = tfds.load("imdb_reviews", as_supervised=True, with_info=True)

{% endhighlight %}


Then, we have the preprocessing step which limits the paragraph sizes to 300 words for performance and replaces some html tags with whitespaces using regular expressions followed by splitting `X_batch` and finally returning `X_batch.to_tensor(default_value=b"<pad>"), y_batch` 


{% highlight python %}
def preprocess(X_batch, y_batch):
    X_batch = tf.strings.substr(X_batch, 0, 300)
    X_batch = tf.strings.regex_replace(X_batch, rb"<br\s*/?>", b" ")
    X_batch = tf.strings.regex_replace(X_batch, b"[^a-zA-Z']", b" ")
    X_batch = tf.strings.split(X_batch)
    return X_batch.to_tensor(default_value=b"<pad>"), y_batch
{% endhighlight %}

To limit the paragraph size, `tf.strings.substr()` is called with `X_batch` as the input and creates a substring with `.substr` from position 0 to 300 <sub>[4]</sub>. The cleaned strings are then put into a tensor called a 'Ragged Tensor' which according to Tensorflow is stored data (feature sets) of non-uniform length <sub>[4][6]</sub>.For the last line, we have a conversion of the Ragged Tensor to `tf.tensor` while a `default_value` of `<pad>` is assigned to empty values and values not defined by `X_batch` <sub>[4]</sub>.

Next, the counter function from python collections is imported and loops over `X_batch` and `y_batch` in `datasets["train"].batch(32).map(preprocess)`. According to cloudxlab.com the function is creating batches of 32 and iteratively applying the preprocess function to each batch using `map()` <sub>[7]</sub>.

{% highlight python %}
from collections import Counter

vocabulary = Counter()
for X_batch, y_batch in datasets["train"].batch(32).map(preprocess):
    for review in X_batch:
        vocabulary.update(list(review.numpy()))
{% endhighlight %}

We have a second loop nested from the first loop that grabs each individual `review` from `X_batch` and then updates the counter function with a list containing a numpy array of each review in `list(review.numpy())`.

Following this, Géron asserts that limiting the vocabulary to the most common one-thousand words is enough to contain enough data to make accurate classifications stating earlier that ". . . . you can generally tell whether a review is positive or not in the first sentence or two" (pg. 536). Therefore, a list comprehension is composed and a `most_common()` function is applied to the counter object defined as `vocabulary = Counter()` earlier. Where list comprehension is defined by w3schools as "a shorter syntax when you want to create a new list based on the values of an existing list" <sub>[8]</sub>. 

{% highlight python %}
vocab_size = 10000
truncated_vocabulary = [
    word for word, count in vocabulary.most_common()[:vocab_size]]
{% endhighlight %}

In the following part, the truncated vocabulary is made into a tensor object by being passed through `tensor.constant()`; apparently, this works because `truncated_vocabulary` is a tensorlike object <sub>[9]</sub>. This method is found in chapter 13 page 432 of Géron's book <sub>[5]</sub>.  

{% highlight python %}
words = tf.constant(truncated_vocabulary)
word_ids = tf.range(len(truncated_vocabulary), dtype=tf.int64)
vocab_init = tf.lookup.KeyValueTensorInitializer(words, word_ids)
num_oov_buckets = 1000
table = tf.lookup.StaticVocabularyTable(vocab_init, num_oov_buckets)
{% endhighlight %}

After the tensor object is made from `truncated vocabulary`, a lookup table is made with the keys being `words` and the values being `words_ids`, which is made in the line previous using a range list constructed from the length of `truncated_vocabulary`, then the lookup table is finally created by passing through `vocab_init` and an integer value specified by `num_oov_buckets` to create the lookup table and `oov` is out-of-vocabulary buckets for words that are not not in the vocabulary [10]. 

In this small function that is defined after constructing the lookup table, the `table.lookup()` is used and passes through `X_batch` and returns all `y_batch`. The training set then defined and undergoes batching and preprocessing followed by passing through `encode_words`. 

{% highlight python %}
def encode_words(X_batch, y_batch):
    return table.lookup(X_batch), y_batch

train_set = datasets["train"].batch(32).map(preprocess)
train_set = train_set.map(encode_words).prefetch(1)
{% endhighlight %}

After all of the cleaning up of the data and preprocessing is done, the neural network is created. According to Géron, `keras.layers.Embedding()` creates a trainable dense vector for the words passed through it. The advantages of using a Dense vector rather than a sparse vector is the ability to contain more information since the feature set that is encoded in the dense layer has more non-zero values than the sparse vector feature set <sub>[11]</sub>. 

{% highlight python %}
embed_size = 128
model = keras.models.Sequential([
    keras.layers.Embedding(vocab_size + num_oov_buckets, embed_size,
                           mask_zero=True, # not shown in the book
                           input_shape=[None]),
    keras.layers.GRU(128, return_sequences=True),
    keras.layers.GRU(128),
    keras.layers.Dense(1, activation="sigmoid")
])
model.compile(loss="binary_crossentropy", optimizer="adam", metrics=["accuracy"])
history = model.fit(train_set, epochs=5)
{% endhighlight %}

The actual neural network is composed of two GRU layers <sub>[5]</sub>. GRU stands for "Gated Recurrent Unit" which was first described in <a href="https://arxiv.org/abs/1406.1078">K. Cho and Co Worker's 2014 paper</a> as a strategy against forgetting. <sub>[12][13][14][15]</sub>. The sigmoid activation function follows the following mathematical function: 

<br>

<div class="container">
<h4>  $ s(h) = \frac{1}{(1 + \exp(-h))} $ </h4>
</div>

<br>
This is part of the linear regression function which is: 

<br>

<div class="container">
<h4> $ y_i = x_{i}^{T}\beta + \epsilon_i $ </h4>
</div>

<br>

From what I understand, the error term, $\epsilon_i$, is set to zero and the sigmoid activation function is composed <i>inside</i> the linear regression function in the following way:

<br>

let 

<div class="container">
<h4> $ s(h) = \frac{1}{(1 + \exp(-h))} $ </h4>
</div>

and

<div class="container">
<h4> $ h = x_{i}^{T}\beta $ </h4>
</div>

then 

<br>

<div class="container">
<h4> $ y_i = s(x_{i}^{T}\beta) = \frac{1}{1 + \exp(-x_{i}^{T}\beta)} = \frac{1}{1 + e^{-x_{i}^{T}\beta}} $ </h4>
</div>

<br>

Where $X^T_i$ is a tensor feature set and $\beta$ is a parameter vector <sub>[13][14][15][16][17][18]</sub>.

So, at this point, I know quite a bit about the sentiment analysis neural network that was written in Géron's book. I will need to update myself more on the specific details of the recurrent neural network (RNN) that was developed by Cho and co workers, but for now I think I have enough to begin analyzing earnings sentiment using a similar approach to that of this example RNN. 

<br>

<h2> References: </h2>


[1]  &nbsp;&nbsp; <a href="https://www.guru99.com/tokenize-words-sentences-nltk.html">Johnson. D., <i>NLTK Tokenize: Words and Sentences Tokenizer with Example.</i>, Guru99.com., 
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  (accessed Apr. 4, 2022).</a>

[2]  &nbsp;&nbsp; <a href="https://www.techtarget.com/searchsecurity/definition/tokenization">Lutkevich. B., <i>Tokenization.</i>, techtarget.com., (accessed Apr. 4, 2022).</a>

[3] &nbsp;&nbsp; <a href="https://en.wikipedia.org/wiki/Tokenization_(data_security)">Wikipedia: <i>Tokenization</i> (accessed Apr. 4, 2022).</a>

[4] &nbsp;&nbsp; <a href="https://cloudxlab.com/assessment/displayslide/5736/defining-the-preprocess-function">CloudxLab: <i>Defining The Preprocess Function</i> (accessed Apr. 4, 2022).</a>

[5] &nbsp;&nbsp; <a href="https://read.amazon.com/kp/embed?asin=B07XGF2G87&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_5QNGJAB2RD3K6TF6WXB9">A. Géron., <i>Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tools, and Techniques to Build Intelligent Systems</i>. 2nd Edition. O'Reilly Media. Sebastopol, 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CA. 2019.</a>

[6] &nbsp;&nbsp; <a href="https://www.tensorflow.org/guide/ragged_tensor">Tensorflow: <i>Ragged Tensors</i> (accessed Apr. 4, 2022).</a>

[7] &nbsp;&nbsp; <a href="https://cloudxlab.com/assessment/displayslide/5740/creating-the-final-train-and-test-sets">CloudxLab: <i>Creating the Final Train and Test Sets</i> (accessed Apr. 4, 2022).</a> 

[8] &nbsp;&nbsp; <a href="https://www.w3schools.com/python/python_lists_comprehension.asp">W3Schools: <i>Python - List Comprehension</i> (accessed Apr. 4, 2022).</a> 

[9] &nbsp;&nbsp; <a href="https://www.tensorflow.org/api_docs/python/tf/constant">Tensorflow: <i>tf.constant</i> (accessed Apr. 4, 2022).</a> 

[10] &nbsp;&nbsp; <a href="https://www.tensorflow.org/api_docs/python/tf/lookup/KeyValueTensorInitializer">Tensorflow: <i>tf.lookup.KeyValueTensorInitializer</i> (accessed Apr. 4, 2022).</a> 

[11] &nbsp;&nbsp; <a href="https://neptune.ai/blog/understanding-vectors-from-a-machine-learning-perspective">C. Horan., <i>Understanding Vectors From a Machine Learning Perspective</i> neptune.ai. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (accessed Apr. 4, 2022).</a> 

[12] &nbsp;&nbsp; <a href="https://neptune.ai/blog/understanding-vectors-from-a-machine-learning-perspective">Tensorflow: <i>Gated Recurrent Unit - Cho et al</i> (accessed Apr. 4, 2022).</a> 

[13] &nbsp;&nbsp; <a href="https://arxiv.org/abs/1406.1078">Cho K. et al. <i>Learning Phrase Representations using RNN Encoder-Decoder for Statistical 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Machine Translation</i>. Cornel University. 2014. </a> 

[14] &nbsp;&nbsp; <a href="https://www.deepmind.com/publications/improving-the-gating-mechanism-of-recurrent-neural-networks">Deepmind: <i>Improving the Gating Mechanism of Recurrent Neural Networks</i> (accessed Apr. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4, 2022).</a>

[15] &nbsp;&nbsp; <a href="https://doi.org/10.1109/ACCESS.2022.3147237">Jin H. et al. <i>Gating Mechanism in Deep Neural Networks for Resource-Efficient Continual 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Learning</i> Institute of Electrical and Electronics Engineers. 10. 18776 - 18786. </a>

[13] &nbsp;&nbsp; <a href="http://www.stat.yale.edu/Courses/1997-98/101/linreg.htm">Yale: <i>Linear Regression</i> (accessed Apr. 4, 2022).</a> 

[14] &nbsp;&nbsp; <a href="https://en.wikipedia.org/wiki/Linear_regression">Wikipedia: <i>Linear regression</i> (accessed Apr. 4, 2022).</a> 

[15] &nbsp;&nbsp; <a href="https://towardsdatascience.com/understanding-logistic-regression-step-by-step-704a78be7e0a">G. Chavez., <i>Understanding Logistic Regression step by step</i> towardsdatascience.com. 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (accessed Apr. 4, 2022).</a> 

[16] &nbsp;&nbsp; <a href="https://www.ibm.com/topics/logistic-regression">IBM: <i>Logistic Regression: What is logistic regression? </i> (accessed Apr. 4, 2022).</a> 

[17] &nbsp;&nbsp; <a href="https://paperswithcode.com/method/sigmoid-activation">Paperswithcode.com <i>Sigmoid Activation</i> (accessed Apr. 4, 2022).</a> 

[18] &nbsp;&nbsp; <a href="https://machinelearningmastery.com/a-gentle-introduction-to-sigmoid-function/">M. Saeed <i>A Gentle Introduction To Sigmoid Function</i> machinelearningmastery.com 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (accessed Apr. 4, 2022).</a> 