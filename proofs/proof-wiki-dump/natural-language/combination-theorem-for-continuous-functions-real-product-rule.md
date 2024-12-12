# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Real/Product_Rule

Theorem
Let $\R$ denote the real numbers.
Let $f$ and $g$ be real functions which are continuous on an open subset $S \subseteq \R$.

Then:

$f g$ is continuous on $S$
where $f g$ denotes the pointwise product of $f$ and $g$.


Proof
By definition of continuous:

$\forall c \in S: \ds \lim_{x \mathop \to c} \map f x = \map f c$
$\forall c \in S: \ds \lim_{x \mathop \to c} \map g x = \map g c$

Let $f$ and $g$ tend to the following limits:

$\ds \lim_{x \mathop \to c} \map f x = l$
$\ds \lim_{x \mathop \to c} \map g x = m$

From the Product Rule for Limits of Real Functions:

$\ds \lim_{x \mathop \to c} \paren {\map f x \map g x} = l m$

So, by definition of continuous again, we have that $f g$ is continuous on $S$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 19$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.4 \ \text{(ii)}$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): continuous function (ii)




