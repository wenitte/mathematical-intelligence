# 

Source: https://proofwiki.org/wiki/Condition_on_Lower_Coefficient_for_Binomial_Coefficient_to_be_Maximum

Theorem
Let $n, k \in \Z_{\ge 0}$ be positive integers.
Let $\dbinom n k$ denote the binomial coefficient of $n$ choose $k$.
Then for a given value of $n$, the value of $k$ for which $\dbinom n k$ is a maximum is:

$k_\max = \floor {\dfrac n 2}$
and also:

$k_\max = \ceiling {\dfrac n 2}$


Proof
From Condition for Increasing Binomial Coefficients:

$\forall k \in \Z_{> 0}: \dbinom n k > \dbinom n {k - 1} \iff k \le \dfrac n 2$

Let $n$ be an even integer, such that:

$n = 2 r$
Then:

$r = \floor {\dfrac n 2} = \ceiling {\dfrac n 2}$
and:

$\forall k < r: \dbinom n r > \dbinom n k$
From Symmetry Rule for Binomial Coefficients:

$\forall k < r: \dbinom n r > \dbinom n {n - k}$
and so:

$\forall k > r: \dbinom n r > \dbinom n k$
We also have:

$\dbinom n r = \dbinom n {n - r} = \dbinom n {n / 2}$
Thus for all $k \ne r$:

$\dbinom n k < \dbinom n {n / 2}$
and so:

$k_\max = \floor {\dfrac n 2} = \ceiling {\dfrac n 2}$
$\Box$

Let $n$ be an odd integer, such that:

$n = 2 r + 1$
Then:

$r = \floor {\dfrac n 2}$
As $r < n$:

$\forall k < r: \dbinom n r > \dbinom n k$
When $k = r$ we also have:

$\dbinom n r = \dbinom n {n - r} = \dbinom n {r + 1}$
Then from Symmetry Rule for Binomial Coefficients:

$\forall k < r: \dbinom n r > \dbinom n {n - k}$
and so:

$\forall k > r + 1: \dbinom n r > \dbinom n k$
We have that:

$r = \floor {\dfrac n 2}$
and:

$r + 1 = \ceiling {\dfrac n 2}$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $7$




