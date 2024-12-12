# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Metric_Space/Quotient_Rule

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\R$ denote the real numbers.
Let $f: M \to \R$ and $g: M \to \R$ be real-valued functions from $M$ to $\R$ which are continuous on $M$.

Then:

$\dfrac f g$ is ‎continuous on $M \setminus \set {x \in A: \map g x = 0}$.
that is, on all the points $x$ of $A$ where $\map g x \ne 0$.


Proof
By definition of ‎continuous:

$\forall a \in M: \ds \lim_{x \mathop \to a} \map f x = \map f a$
$\forall a \in M: \ds \lim_{x \mathop \to a} \map g x = \map g a$

Let $f$ and $g$ tend to the following limits:

$\ds \lim_{x \mathop \to a} \map f x = l$
$\ds \lim_{x \mathop \to a} \map g x = m$

From the Product Rule for Limits of Real Functions, we have that:

$\ds \lim_{x \mathop \to a} \paren {\dfrac {\map f x} {\map g x} = \dfrac l m$
whenever $m \ne 0$.

So, by definition of ‎continuous again, we have that $\dfrac f g$ is continuous on $M \setminus \set {x \in A: \map g x = 0}$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 14$




