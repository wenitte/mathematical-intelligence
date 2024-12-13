# 

Source: https://proofwiki.org/wiki/Non-Zero_Modulo_Numbers_Closed_under_Multiplication_then_Modulo_is_Prime

Theorem
Let $\struct {\Z_m, +_m, \times_m}$ be the ring of integers modulo $m$ for $m > 1$.
Let $\Z'_m$ be the set of non-zero integers modulo $m$.

Let $\struct {\Z_m, \times_m}$ be closed under modulo multiplication.
Then $m$ is prime.


Proof
Suppose $m$ is not prime.
Then $m = r s$ for some $r, s \in \Z: 1 < r < m, 1 < s < m$.
So $r, s \in \Z'_m$.
But:

$r \times_m s \equiv 0 \pmod m$
and so $r \times_m s \notin \Z'_m$.
So if $m$ is not prime, $\struct {\Z_m, \times_m}$ is not closed.
The result follows from the Rule of Transposition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.2$




