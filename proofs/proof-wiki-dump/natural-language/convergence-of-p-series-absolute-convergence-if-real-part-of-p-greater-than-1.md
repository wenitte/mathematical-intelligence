# 

Source: https://proofwiki.org/wiki/Convergence_of_P-Series/Absolute_Convergence_if_Real_Part_of_p_Greater_than_1



Theorem
Let $p$ be a complex number.
Let $\map \Re p > 1$.
Then the $p$-series:

$\ds \sum_{n \mathop = 1}^\infty n^{-p}$
converges absolutely.


Proof
Lemma
Let $p = x + i y$ be a complex number where $x, y \in \R$ such that:

$x > 0$
$x \ne 1$

Then:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^x}$ converges if and only if $\ds \lim_{P \mathop \to \infty} \dfrac {P^{1 - x} } {1 - x}$ converges.

Since $x > 1$ it follows that $1 - x < 0$.
Thus $P^{1 - x} \to 0$ as $P \to \infty$.
Setting $x - 1 = \delta >0$, this limit is:

$\ds -\frac 1 {\delta} \lim_{t \mathop \to \infty} \frac 1 {t^\delta} = 0$
Hence the integral is just $\dfrac 1 {1 - x}$ (that is, convergent) and so the sum converges as well.
Since the terms of the sum were positive everywhere, it is absolutely convergent and hence so is:

$\ds \sum_{n \mathop = 1}^\infty n^{-p}$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.6$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.34 \ (3)$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests




