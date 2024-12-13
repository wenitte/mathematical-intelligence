# 

Source: https://proofwiki.org/wiki/Order_of_M%C3%B6bius_Function

Theorem
Let $\mu$ denote the Möbius function .
Then:

$\ds \sum_{n \mathop \le N} \map \mu n = \map o N$
where $o$ denotes little-o notation.


Proof
Let $\map \Re z$ be the real part of a complex variable $z$.
By Dirichlet Series is Analytic, the Riemann zeta function is analytic.
By Trivial Zeroes of Riemann Zeta Function are Even Negative Integers, the Riemann zeta function has no zeroes in $\map \Re z > 1$.
Thus the reciprocal of the Riemann zeta function is analytic in $\map \Re z > 1$.
By Reciprocal of Riemann Zeta Function, this means that $\ds \sum_{n \mathop = 1}^\infty \map \mu n n^{-z}$ converges to an analytic function in $\map \Re z > 1$.
By taking $a_n = \map \mu n$ in Ingham's Theorem on Convergent Dirichlet Series:

$\ds \sum_{n \mathop = 1}^\infty \frac {\map \mu n} {n^z}$ converges for $\map \Re z \ge 1$.
Taking $z = 1$, we are given a convergent sum:

$\ds \sum_{n \mathop = 1}^\infty \frac {\map \mu n} n$
Clearly:

$\ds \sum_{n \mathop = 1}^N \frac {\map \mu n} n \ge \sum_{n \mathop = 1}^N \frac {\map \mu n} N$

There is believed to be a mistake here, possibly a typo.In particular: $\map \mu n$ can be negative so this isn't obvious, indeed it's not even trueYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
but:

$\ds \lim_{N \mathop \to \infty} \sum_{n \mathop = 1}^N \frac {\map \mu n} n = \lim_{z \mathop \to 1} \frac 1 {\map \zeta z}$
Since Harmonic Series is Divergent, $\dfrac 1 {\map \zeta z}$ goes to $0$ by Reciprocal of Null Sequence.
Hence also:

$\ds \lim_{N \mathop \to \infty} \sum_{n \mathop = 1}^N \frac {\map \mu n} N = 0$
$\blacksquare$





