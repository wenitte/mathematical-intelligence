# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Mappings/Metric_Space/Sum_Rule

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\R$ denote the real numbers.
Let $f: A \to \R$ and $g: A \to \R$ be real-valued functions defined on $A$, except possibly at the point $a \in A$.
Let $f$ and $g$ tend to the following limits:

$\ds \lim_{x \mathop \to a} \map f x = l$
$\ds \lim_{x \mathop \to a} \map g x = m$

Then:

$\ds \lim_{x \mathop \to a} \paren {\map f x + \map g x} = l + m$


Proof
Let $\sequence {x_n}$ be any sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: x_n \ne a$
$\ds \lim_{n \mathop \to \infty} \ x_n = a$

By Limit of Function by Convergent Sequences:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
$\ds \lim_{n \mathop \to \infty} \map g {x_n} = m$

By the Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\map f {x_n} + \map g {x_n} } = l + m$

Applying Limit of Function by Convergent Sequences again, we get:

$\ds \lim_{x \mathop \to a} \paren {\map f x + \map g x} = l + m$
$\blacksquare$




