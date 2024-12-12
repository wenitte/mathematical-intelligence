# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Functions/Complex/Combined_Sum_Rule

Theorem
Let $\C$ denote the complex numbers.
Let $f$ and $g$ be complex functions defined on an open subset $S \subseteq \C$, except possibly at the point $c \in S$.
Let $f$ and $g$ tend to the following limits:

$\ds \lim_{z \mathop \to c} \map f z = l$
$\ds \lim_{z \mathop \to c} \map g z = m$

Let $\lambda, \mu \in \C$ be arbitrary complex numbers.

Then:

$\ds \lim_{z \mathop \to c} \paren {\lambda \map f z + \mu \map g z} = \lambda l + \mu m$


Proof
Let $\sequence {z_n}$ be any sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: z_n \ne c$
$\ds \lim_{n \mathop \to \infty} z_n = c$

By Limit of Complex Function by Convergent Sequences:

$\ds \lim_{n \mathop \to \infty} \map f {z_n} = l$
$\ds \lim_{n \mathop \to \infty} \map g {z_n} = m$

By the Combined Sum Rule for Complex Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda \map f {z_n} + \mu \map g {z_n} } = \lambda l + \mu m$

Applying Limit of Complex Function by Convergent Sequences again, we get:

$\ds \lim_{x \mathop \to c} \paren {\lambda \map f z + \mu \map g z} = \lambda l + \mu m$
$\blacksquare$





