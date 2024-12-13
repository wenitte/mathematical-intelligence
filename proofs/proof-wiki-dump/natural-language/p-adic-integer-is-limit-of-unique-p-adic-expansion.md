# 

Source: https://proofwiki.org/wiki/P-adic_Integer_is_Limit_of_Unique_P-adic_Expansion

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $x \in \Z_p$.

Then $x$ is the limit of a unique $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$


Proof
From P-adic Integer is Limit of Unique Coherent Sequence of Integers, there exists a unique coherent sequence $\sequence{\alpha_n}$ such that:

$\ds \lim_{n \mathop \to \infty} \alpha_n = x$
From Coherent Sequence is Partial Sum of P-adic Expansion, there exists a unique $p$-adic expansion of the form:

$\ds \sum_{n \mathop = 0}^\infty d_n p^n$
such that:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n d_i p^i$
That is:

$\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = 0}^n d_i p^i = x$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Corollary $3.3.11$




