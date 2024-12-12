# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Real/Combined_Sum_Rule

Theorem
Let $\R$ denote the real numbers.
Let $f$ and $g$ be real functions which are continuous on an open subset $S \subseteq \R$.
Let $\lambda, \mu \in \R$ be arbitrary real numbers.

Then:

$\lambda f + \mu g$ is continuous on $S$.


Proof
By definition of continuous, we have that

$\forall c \in S: \ds \lim_{x \mathop \to c} \map f x = \map f c$
$\forall c \in S: \ds \lim_{x \mathop \to c} \map g x = \map g c$

Let $f$ and $g$ tend to the following limits:

$\ds \lim_{x \mathop \to c} \map f x = l$
$\ds \lim_{x \mathop \to c} \map g x = m$

From the Combined Sum Rule for Limits of Real Functions, we have that:

$\ds \lim_{x \mathop \to c} \paren {\lambda \map f x + \mu \map g x} = \lambda l + \mu m$

So, by definition of continuous again, we have that $\lambda f + \mu g$ is continuous on $S$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.4 \ \text{(i)}$




