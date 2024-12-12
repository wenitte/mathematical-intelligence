# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Functions/Real/Multiple_Rule

Theorem
Let $\R$ denote the real numbers.
Let $f$ be a real function defined on an open subset $S \subseteq \R$, except possibly at the point $c \in S$.
Let $f$ tend to the following limit:

$\ds \lim_{x \mathop \to c} \map f x = l$

Let $\lambda \in \R$ be an arbitrary real number.

Then:

$\ds \lim_{x \mathop \to c} \lambda \map f x = \lambda l$


Proof
Let $\sequence {x_n}$ be any sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: x_n \ne c$
$\ds \lim_{n \mathop \to \infty} x_n = c$

By Limit of Real Function by Convergent Sequences:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$

By the Multiple Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \lambda \map f {x_n} = \lambda l$

Applying Limit of Real Function by Convergent Sequences again:

$\ds \lim_{x \mathop \to c} \lambda \map f x = \lambda l$
$\blacksquare$





