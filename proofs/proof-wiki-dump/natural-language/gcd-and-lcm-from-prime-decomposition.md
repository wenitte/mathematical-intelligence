# 

Source: https://proofwiki.org/wiki/GCD_and_LCM_from_Prime_Decomposition

Theorem
Let $m, n \in \Z$.
Let:

$m = p_1^{k_1} p_2^{k_2} \dotsm p_r^{k_r}$
$n = p_1^{l_1} p_2^{l_2} \dotsm p_r^{l_r}$
$p_i \divides m \lor p_i \divides n, 1 \le i \le r$.

That is, the primes given in these prime decompositions may be divisors of either of the numbers $m$ or $n$.

Note that if one of the primes $p_i$ does not appear in the prime decompositions of either one of $m$ or $n$, then its corresponding index $k_i$ or $l_i$ will be zero.

Then the following results apply:

$\gcd \set {m, n} = p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \ldots p_r^{\min \set {k_r, l_r} }$
$\lcm \set {m, n} = p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \ldots p_r^{\max \set {k_r, l_r} }$


Proof
The proof of these results can be found in:

GCD from Prime Decomposition
LCM from Prime Decomposition
$\blacksquare$





