# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Functions/Complex/Multiple_Rule

Theorem
Let $\C$ denote the complex numbers.
Let $f$ be a complex function defined on an open subset $S \subseteq \C$, except possibly at the point $c \in S$.
Let $f$ tend to the following limit:

$\ds \lim_{z \mathop \to c} \map f z = l$

Let $\lambda \in \C$ be an arbitrary complex number.

Then:

$\ds \lim_{z \mathop \to c} \lambda \map f z = \lambda l$


Proof
Let $\sequence {z_n}$ be any sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: z_n \ne c$
$\ds \lim_{n \mathop \to \infty} z_n = c$

By Limit of Complex Function by Convergent Sequences:

$\ds \lim_{n \mathop \to \infty} \map f {z_n} = l$

By the Multiple Rule for Complex Sequences:

$\ds \lim_{n \mathop \to \infty}\lambda \map f {z_n} = \lambda l$

Applying Limit of Complex Function by Convergent Sequences again:

$\ds \lim_{z \mathop \to c} \lambda \map f z = \lambda l$
$\blacksquare$





