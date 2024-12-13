# 

Source: https://proofwiki.org/wiki/Partial_Sum_Congruent_to_P-adic_Integer_Modulo_Power_of_p

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $a \in \Z_p$.
Let $a = \ds \sum_{j=0}^\infty d_jp^j$ be the $p$-adic expansion of $a$
For all $n \in \N$, let $a_n = \ds \sum_{j=0}^n d_jp^j$ be the n-th partial sum of the $p$-adic expansion of $a$

Then:

$\forall n \in \N : a_n \equiv a \pmod{p^{n+1}\Z_p}$
where $a_n \equiv a \pmod{p^{n+1}\Z_p}$ denotes congruence modulo the ideal $\Z_p$.

Proof
We have:










\(\ds \forall n \in \N: \, \)



\(\ds a - a_n\)

\(=\)







\(\ds \sum_{j = 0}^\infty d_j p^j - \sum_{j = 0}^n d_j p_j\)





Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j = n+1}^\infty d_j p^j\)





Removing first $n$ terms from the series














\(\ds \)

\(=\)







\(\ds p^{n+1} \sum_{j = 0}^\infty d_{j+n+1} p^j\)





Extract common factor from the series














\(\ds \)

\(\in\)







\(\ds p^{k+1} \Z_p\)





Definition of P-adic Integer








\(\ds \leadsto \ \ \)

\(\ds \forall k \in \N: \, \)



\(\ds a\)

\(\equiv\)







\(\ds a_k \pmod {p^{k+1}\Z_p}\)





Definition of Congruence Modulo an Ideal



$\blacksquare$





