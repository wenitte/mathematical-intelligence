# 

Source: https://proofwiki.org/wiki/Nth_Root_Test



Theorem
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be a series of real numbers $\R$ or complex numbers $\C$.
Let the sequence $\sequence {a_n}$ be such that the limit superior $\ds \limsup_{n \mathop \to \infty} \size {a_n}^{1/n} = l$.
Then:

If $l > 1$, the series $\ds \sum_{n \mathop = 1}^\infty a_n$ diverges.
If $l < 1$, the series $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely.


Weak Form
If we restrict our domain of $\sequence {a_n}$ to the strictly positive, we can use a weaker form:

Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be a series of (strictly) positive real numbers $\R$.
Let the sequence $\sequence {a_n}$ be such that the limit $\ds \lim_{n \mathop \to \infty} \size {a_n}^{1/n} = l$.
Then:

If $l > 1$, the series $\ds \sum_{n \mathop = 1}^\infty a_n$ diverges.
If $l < 1$, the series $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely.


Proof
Absolute Convergence
Let $l < 1$.
Then let us choose $\epsilon > 0$ such that $l + \epsilon < 1$.
Consider the real sequence $\sequence {b_n}$ defined by $\sequence {b_n} = \sequence {\size {a_n} }$.
Here, $\size {a_n}$ denotes either the absolute value of $a_n$, or the complex modulus of $a_n$.
Then:

$\ds l = \limsup_{n \mathop \to \infty} {b_n}^{1/n}$
It follows from Terms of Bounded Sequence Within Bounds that for sufficiently large $n$,:

$b_n < \paren {l + \epsilon}^n$
By Sum of Infinite Geometric Sequence, the series $\ds \sum_{n \mathop = 1}^\infty \paren {l + \epsilon}^n$ converges.
By the comparison test, $\ds \sum_{n \mathop = 1}^\infty b_n$ converges.
Hence $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely by the definition of absolute convergence.
$\Box$


Divergence
Let $l > 1$.
Then we choose $\epsilon > 0$ such that $l - \epsilon > 1$.
Aiming for a contradiction, suppose that there exist an upper bound for the set:

$S := \set {n \in \N: \size {a_n}^{1/n} > l - \epsilon}$
Then for all sufficiently large $n$:

$\size {a_n}^{1/n} \le l - \epsilon$
However, this implies that:

$\ds \limsup_{n \mathop \to \infty} \size {a_n}^{1/n} \le l - \epsilon$
which is false by the definition of $l$.
The set $S$, then, is not bounded.
This means that there exist arbitrarily large $n$ such that:

$\size {a_n} > \paren {l - \epsilon}^n$
Thus:

$\ds \lim_{n \mathop \to \infty} \size {a_n} \ne 0$
and so $\ds \lim_{n \mathop \to \infty} a_n \ne 0$.
Hence from Terms in Convergent Series Converge to Zero, $\ds \sum_{n \mathop = 1}^\infty a_n$ must be divergent.
$\blacksquare$


Warning
If $l = 1$, the Nth Root Test provides no information on whether $\ds \sum_{n \mathop = 1}^\infty a_n$ converges absolutely, converges conditionally, or diverges.
If $\ds \limsup_{n \mathop \to \infty} \size {a_n}^{1/n} = \infty$, then of course $\ds \sum_{n \mathop = 1}^\infty a_n$ diverges.


Also known as
The Nth Root Test is also seen presented just as the Root Test.
Some sources use:

the Cauchy Convergence Test
Cauchy's Convergence Test
Cauchy's Test
for Augustin Louis Cauchy, but these are imprecise enough for $\mathsf{Pr} \infty \mathsf{fWiki}$ to prefer Nth Root Test


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.18$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.5$: Tests for convergence of series
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cauchy convergence test
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy convergence test




