# 

Source: https://proofwiki.org/wiki/Infinite-Dimensional_Banach_Space_has_Uncountable_Dimension

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $X$ be an infinite-dimensional Banach space over $\Bbb F$. 
Let $B$ be a Hamel basis for $X$.

Then $B$ is uncountable.
That is, $\dim X > \aleph_0$.


This article, or a section of it, needs explaining.In particular: While the title talks about having an uncountable dimension, the result itself talks about the Hamel basis being uncountable. Can the two concepts be linked such that the result matches the title?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Suppose that $B$ is countable. 
Let: 

$B = \set {e_n : n \in \N}$
For each $n \in \N$, let: 

$F_n = \span \set {e_k : k \le n}$
Since $\dim F_n = n$, $F_n$ clearly has finite dimension. 
We show that: 

$\ds X = \bigcup_{n \mathop = 1}^\infty F_n$
Let $x \in X$. 
Then there exists $n_1, \ldots, n_k \in \N$ and $\alpha_1, \ldots, \alpha_n \in \Bbb F$ such that: 

$\ds x = \sum_{j \mathop = 1}^k \alpha_j e_{n_j}$

This article, or a section of it, needs explaining.In particular: Why is the above true?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Setting:

$\ds N = \max_{1 \le j \le k} n_j$
we have that $x \in F_N$, hence:

$\ds X = \bigcup_{n \mathop = 1}^\infty F_n$
From Finite Dimensional Subspace of Normed Vector Space is Closed, $F_n$ is closed for each $n \in \N$. 
From Interior of Proper Subspace of Normed Vector Space is Empty, $F_n$ has empty interior for each $n \in \N$.
So each $F_n$ is nowhere dense.
Since $X$ is a complete metric space, it is a Baire space.
However, we have written $X$ as a countable union of nowhere dense sets.
This contradicts the Baire Category Theorem.
So $B$ is uncountable.
$\blacksquare$





