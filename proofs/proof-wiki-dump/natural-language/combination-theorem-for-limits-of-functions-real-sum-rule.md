# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Functions/Real/Sum_Rule

Theorem
Let $\R$ denote the real numbers.
Let $f$ and $g$ be real functions defined on an open subset $S \subseteq \R$, except possibly at the point $c \in S$.
Let $f$ and $g$ tend to the following limits:

$\ds \lim_{x \mathop \to c} \map f x = l$
$\ds \lim_{x \mathop \to c} \map g x = m$

Then:

$\ds \lim_{x \mathop \to c} \paren {\map f x + \map g x} = l + m$


Proof
Let $\sequence {x_n}$ be any sequence of elements of $S$ such that:

$\forall n \in \N_{>0}: x_n \ne c$
$\ds \lim_{n \mathop \to \infty} \ x_n = c$

By Limit of Real Function by Convergent Sequences:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
$\ds \lim_{n \mathop \to \infty} \map g {x_n} = m$

By the Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\map f {x_n} + \map g {x_n} } = l + m$

Applying Limit of Real Function by Convergent Sequences again, we get:

$\ds \lim_{x \mathop \to c} \paren {\map f x + \map g x} = l + m$
$\blacksquare$


Sources
1947: James M. Hyslop: Infinite Series (3rd ed.) ... (previous) ... (next): Chapter $\text I$: Functions and Limits: $\S 4$: Limits of Functions: Theorem $1 \ \text{(i)}$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.4$: Continuity




