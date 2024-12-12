# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Mappings/Metric_Space/Multiple_Rule

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\R$ denote the real numbers.
Let $f: A \to \R$ be a real-valued function defined on $A$, except possibly at the point $a \in A$.
Let $f$ tend to the following limit:

$\ds \lim_{x \mathop \to a} \map f x = l$
Let $\lambda \in \R$ be an arbitrary real number.

Then:

$\ds \lim_{x \mathop \to a} \lambda \map f x = \lambda l$


Proof
Let $\sequence {x_n}$ be any sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: x_n \ne a$
$\ds \lim_{n \mathop \to \infty} \ x_n = a$

By Limit of Function by Convergent Sequences:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$

By the Multiple Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \lambda \map f {x_n} = \lambda l$

Applying Limit of Function by Convergent Sequences again, we get:

$\ds \lim_{x \mathop \to a} \lambda \map f x = \lambda l$
$\blacksquare$





