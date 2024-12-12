# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Functions/Real/Combined_Sum_Rule

Theorem
Let $\R$ denote the real numbers.
Let $f$ and $g$ be real functions defined on an open subset $S \subseteq \R$, except possibly at the point $c \in S$.
Let $f$ and $g$ tend to the following limits:

$\ds \lim_{x \mathop \to c} \map f x = l$
$\ds \lim_{x \mathop \to c} \map g x = m$

Let $\lambda, \mu \in \R$ be arbitrary real numbers.

Then:

$\ds \lim_{x \mathop \to c} \paren {\lambda \map f x + \mu \map g x} = \lambda l + \mu m$


Proof
Let $\sequence {x_n}$ be any sequence of elements of $S$ such that:

$\forall n \in \N^*: x_n \ne c$
$\ds \lim_{n \mathop \to \infty} x_n = c$

By Limit of Real Function by Convergent Sequences:

$\ds \lim_{n \mathop \to \infty} \map f {x_n} = l$
$\ds \lim_{n \mathop \to \infty} \map g {x_n} = m$

By the Combined Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda \map f {x_n} + \mu \map g {x_n} } = \lambda l + \mu m$

Applying Limit of Real Function by Convergent Sequences again, we get:

$\ds \lim_{x \mathop \to c} \paren {\lambda \map f x + \mu \map g x} = \lambda l + \mu m$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.12 \ \text{(i)}$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.6$: Limits of functions




