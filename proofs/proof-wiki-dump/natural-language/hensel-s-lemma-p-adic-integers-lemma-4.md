# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma/P-adic_Integers/Lemma_4

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.

Let $\map F X \in \Z_p \sqbrk X$ be a polynomial.

Let $\alpha_0 \in \Z_p$ be a $p$-adic integer:

$\map F {\alpha_0} \equiv 0 \pmod {p\Z_p}$

Let $T$ be the set of $p$-adic digits.
Let:

$S_1 = \set{\tuple{b_0} \subseteq T^1 : \map F {b_0} \equiv 0 \pmod{p\Z_p} \land b_0 \equiv \alpha_0 \pmod{p\Z_p}}$

Let $d_0$ be the first $p$-adic digit of the canonical expansion of $\alpha_0$.

Then:

$\tuple{d_0} \in S_1$


Proof
Let the $p$-adic expansion for $\alpha_0$ be:

$\alpha_0 = \ds \sum_{n = 0}^\infty d_n p^n$
We have:














\(\ds \alpha_0 - d_0\)

\(=\)







\(\ds \paren{\sum_{n = 0}^\infty d_n p^n} - d_0\)




















\(\ds \)

\(=\)







\(\ds \sum_{n = 1}^\infty d_n p^n\)





Subtract first term from the sum














\(\ds \)

\(=\)







\(\ds p \paren{\sum_{n = 1}^\infty d_n p^{n-1} }\)





Factor $p$ from the sum














\(\ds \)

\(\in\)







\(\ds p\Z_p\)














\(\ds \leadsto \ \ \)





\(\ds d_0\)

\(\equiv\)







\(\ds \alpha_0 \pmod {p\Z_p}\)





Definition of Congruence Modulo an Ideal



From Polynomials of Congruent Ring Elements are Congruent:

$\map F {d_0} \equiv \map F {\alpha_0} \equiv 0 \pmod {p\Z_p}$
Hence:

$\tuple {d_0} \in S_1$
$\blacksquare$





