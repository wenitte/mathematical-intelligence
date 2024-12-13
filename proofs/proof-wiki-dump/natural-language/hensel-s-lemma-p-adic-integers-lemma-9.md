# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma/P-adic_Integers/Lemma_9



Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.

Let $\map F X \in \Z_p \sqbrk X$ be a polynomial.
Let $\map {F'} X$ be the (formal) derivative of $F$.

Let $\alpha_0 \in \Z_p$ be a $p$-adic integer:

$\map F {\alpha_0} \equiv 0 \pmod {p\Z_p}$
$\map {F'} {\alpha_0} \not\equiv 0 \pmod {p\Z_p}$

Let $T$ be the set of $p$-adic digits.
For each $k \in \N_{>0}$, let:

$S_k = \set{\tuple{b_0, b_1, \ldots, b_{k-1}} \subseteq T^k : \map F {\ds \sum_{n = 0}^{k-1} b_n p^n} \equiv 0 \pmod{p^k\Z_p} \quad \text{and} \quad \ds \sum_{n = 0}^{k-1} b_n p^n \equiv \alpha_0 \pmod{p\Z_p}}$
Let:

$\tuple{b_0, b_1, \ldots, b_{k-1}} \in S_k$.

Then:

$\paren{c, d \in T : \tuple{b_0, b_1, \ldots, b_{k-1}, c}, \tuple{b_0, b_1, \ldots, b_{k-1}, d} \in S_{k+1}} \implies c = d$
Proof
Lemma 7
$x \in \Z_p \implies \exists y \in T : y p^k \equiv x p^k \pmod {p^{k+1}\Z_p}$
$\Box$

Lemma 8
$x, y \in \Z_p \implies \map F {x + y p ^k} \equiv \map F x + y p^k \map {F'} x \pmod {p^{k+1}\Z_p}$
$\Box$

Lemma 10
$\forall x \in \Z_p: p^k x \equiv 0 \pmod{p^{k+1}\Z_p} \implies x \equiv 0 \pmod{p\Z_p}$
$\Box$

Let:

$c, d \in T : \tuple{b_0, b_1, \ldots, b_{k-1}, c}, \tuple{b_0, b_1, \ldots, b_{k-1}, d} \in S_{k+1}$

Let:

$a = \ds \sum_{n = 0}^{k-1} b_n p^n$
We have:














\(\ds a\)

\(\equiv\)







\(\ds \alpha_0 \pmod{p\Z_p}\)





Hypothesis








\(\ds \leadsto \ \ \)





\(\ds \map {F'} a\)

\(\equiv\)







\(\ds \map {F'} {\alpha_0} \pmod{p\Z_p}\)





Polynomials of Congruent Ring Elements are Congruent




From Lemma 7:

$\exists b \in T : \map {F'} a \equiv b \pmod{p\Z_p}$
We have:














\(\ds b\)

\(\equiv\)







\(\ds \map {F'} a \pmod{p\Z_p}\)





From above














\(\ds \)

\(\equiv\)







\(\ds \map {F'} {\alpha_0} \pmod{p\Z_p}\)





From above














\(\ds \)

\(\not\equiv\)







\(\ds 0 \pmod{p\Z_p}\)





Hypothesis








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\nmid\)







\(\ds b\)










We have:














\(\ds 0\)

\(\equiv\)







\(\ds \map F {a + cp^k} - \map F {a + dp^k} \pmod{p^{k+1}\Z_p}\)





By hypothesis, $\map F {a + cp^k} \equiv \map F {a + dp^k} \equiv 0 \pmod{p^{k+1}\Z_p}$














\(\ds \)

\(\equiv\)







\(\ds \map F a + cp^k \map {F'} a - \map F a - dp^k \map {F'} a \pmod{p^{k+1}\Z_p}\)





Lemma 8














\(\ds \)

\(\equiv\)







\(\ds cp^k \map {F'} a - dp^k \map {F'} a \pmod{p^{k+1}\Z_p}\)





$\map F a$ terms cancel














\(\ds \)

\(\equiv\)







\(\ds p^k \map {F'} a \paren{c - d} \pmod{p^{k+1}\Z_p}\)





Extract common factor $p^k\map {F'} a$








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\equiv\)







\(\ds \map {F'} a \paren{c - d} \pmod{p\Z_p}\)





Lemma 10














\(\ds \)

\(\equiv\)







\(\ds b \paren{c - d} \pmod{p\Z_p}\)





As $b \equiv \map {F'} a \pmod{p\Z_p}$








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds b \paren{c - d}\)





Congruence Modulo Equivalence for Integers in P-adic Integers








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds c - d\)





Euclid's Lemma for Prime Divisors since $p \nmid b$








\(\ds \leadsto \ \ \)





\(\ds c\)

\(\equiv\)







\(\ds d \pmod p\)





Definition of Congruence Modulo Integer








\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds d\)





As $0 \le x, y < p$



The result follows.
$\blacksquare$





