# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Metric_Space/Sum_Rule

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\R$ denote the real numbers.
Let $f: M \to \R$ and $g: M \to \R$ be real-valued functions from $M$ to $\R$ which are continuous on $M$.

Then:

$f + g$ is ‎continuous on $M$.


Proof
By definition of ‎continuous:

$\forall a \in M: \ds \lim_{x \mathop \to a} \map f x = \map f a$
$\forall a \in M: \ds \lim_{x \mathop \to a} \map g x = \map g a$

Let $f$ and $g$ tend to the following limits:

$\ds \lim_{x \mathop \to a} \map f x = l$
$\ds \lim_{x \mathop \to a} \map g x = m$

From the Sum Rule for Limits of Real Functions, we have that:

$\ds \lim_{x \mathop \to a} \paren {\map f x + \map g x} = l + m$

So, by definition of ‎continuous again, we have that $f + g$ is continuous on $M$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 14$




