# 

Source: https://proofwiki.org/wiki/LCM_from_Prime_Decomposition/Proof_2

Theorem
Let $a, b \in \Z$.
From Expression for Integers as Powers of Same Primes, let:














\(\ds a\)

\(=\)







\(\ds p_1^{k_1} p_2^{k_2} \ldots p_r^{k_r}\)




















\(\ds b\)

\(=\)







\(\ds p_1^{l_1} p_2^{l_2} \ldots p_r^{l_r}\)
















\(\ds \forall i \in \set {1, 2, \dotsc, r}: \, \)



\(\ds p_i\)

\(\divides\)







\(\ds a\)


















\(\, \ds \lor \, \)

\(\ds p_i\)

\(\divides\)







\(\ds b\)










That is, the primes given in these prime decompositions may be divisors of either of the numbers $a$ or $b$.

Then:

$\lcm \set {a, b} = p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \ldots p_r^{\max \set {k_r, l_r} }$
where $\lcm \set {a, b}$ denotes the lowest common multiple of $a$ and $b$.


Proof
Note that if one of the primes $p_i$ does not appear in the prime decompositions of either one of $a$ or $b$, then its corresponding index $k_i$ or $l_i$ will be zero.

Let $a \divides m$.
Then:

$m$ is of the form $p_1^{h_1} p_2^{h_2} \ldots p_r^{h_r}, \forall i: 1 \le i \le r, 0 \le k_i \le h_i$
$a \divides l \iff \forall i: 1 \le i \le r, 0 \le l_i \le h_i$
So:

$a \divides m \land b \divides m \iff \forall i: 1 \le i \le r, 0 \le \max \set {k_i, l_i} \le h_i$

For $m$ to be at its smallest, we want the smallest possible exponent for each of these primes.
So for each $i \in \closedint 1 r$, $h_i$ needs to equal $\max \set {k_i, l_i}$.

Hence the result:

$\lcm \set {a, b} = p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \ldots p_r^{\max \set {k_r, l_r} }$
$\blacksquare$





