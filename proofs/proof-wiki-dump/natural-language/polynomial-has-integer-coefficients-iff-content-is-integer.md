# 

Source: https://proofwiki.org/wiki/Polynomial_has_Integer_Coefficients_iff_Content_is_Integer

Theorem
Let $f$ be a polynomial with rational coefficients.
Let $\cont f$ be the content of $f$.

$f$ has integer coefficients if and only if $\cont f$ is an integer.


Proof
If $f \in \Z \sqbrk X$ then $\cont f \in \Z$ by definition of content.
Conversely, suppose that:

$f = a_d X^d + \cdots + a_1 X + a_0 \notin \Z \sqbrk X$
Let $m = \min \set {n \in \N : n f \in \Z \sqbrk X}$.
Then, by definition of content:

$\cont f = \dfrac 1 m \gcd \set {m a_d, \ldots, m a_0}$
So $\cont f \in \Z$ would mean that this GCD is a multiple of $m$.
This, however, means that for each $i$, $\dfrac {m a_i} m = a_i$ is an integer, which contradicts our assumption that $f \notin \Z \sqbrk X$.
$\blacksquare$





