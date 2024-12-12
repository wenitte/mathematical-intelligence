# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Functions/Complex/Product_Rule

Theorem
Let $\C$ denote the complex numbers.
Let $f$ and $g$ be complex functions which are continuous on an open subset $S \subseteq \C$.

Then:

$f g$ is continuous on $S$
where $f g$ denotes the pointwise product of $f$ and $g$.


Proof
By definition of continuous:

$\forall c \in S: \ds \lim_{z \mathop \to c} \map f z = \map f c$
$\forall c \in S: \ds \lim_{z \mathop \to c} \map g z = \map g c$

Let $f$ and $g$ tend to the following limits:

$\ds \lim_{z \mathop \to c} \map f z = l$
$\ds \lim_{z \mathop \to c} \map g z = m$

From the Product Rule for Limits of Complex Functions:

$\ds \lim_{z \mathop \to c} \paren {\map f z \map g z} = l m$

So, by definition of continuous again, we have that $f g$ is continuous on $S$.
$\blacksquare$





