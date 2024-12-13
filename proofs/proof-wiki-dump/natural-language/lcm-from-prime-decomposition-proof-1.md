# 

Source: https://proofwiki.org/wiki/LCM_from_Prime_Decomposition/Proof_1

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













\(\ds \lcm \set {a, b}\)

\(=\)







\(\ds \frac {a b} {\gcd \set {a, b} }\)





Product of GCD and LCM














\(\ds \)

\(=\)







\(\ds \frac {\paren {p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r} } \paren {p_1^{l_1} p_2^{l_2} \ldots p_r^{l_r} } } {p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \cdots p_r^{\min \set {k_r, l_r} } }\)





GCD from Prime Decomposition














\(\ds \)

\(=\)







\(\ds \frac {\paren {p_1^{k_1 + l_1} p_2^{k_2 + l_2} \cdots p_r^{k_r + l_r} } } {p_1^{\min \set {k_1, l_1} } p_2^{\min \set {k_2, l_2} } \cdots p_r^{\min \set {k_r, l_r} } }\)




















\(\ds \)

\(=\)







\(\ds p_1^{k_1 + l_1 - \min \set {k_1, l_1} } p_2^{k_2 + l_2 - \min \set {k_2, l_2} } \cdots p_r^{k_r + l_r - \min \set {k_r, l_r} }\)




















\(\ds \)

\(=\)







\(\ds p_1^{\max \set {k_1, l_1} } p_2^{\max \set {k_2, l_2} } \cdots p_r^{\max \set {k_r, l_r} }\)





Sum Less Minimum is Maximum



$\blacksquare$





