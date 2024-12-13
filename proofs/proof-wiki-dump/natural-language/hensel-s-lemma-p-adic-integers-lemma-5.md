# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma/P-adic_Integers/Lemma_5



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

Then there exists a unique $p$-adic digit $\map b {b_0, b_1, \ldots, b_{k-1}}$:

$\tuple{b_0, b_1, \ldots, b_{k-1}, \map b {b_0, b_1, \ldots, b_{k-1}}} \in S_{k+1}$


Proof
Lemma 6
$x \equiv 0 \pmod {p^k\Z_p} \implies \exists y \in \Z_p : x = y p^k$
$\Box$

Lemma 7
$x \in \Z_p \implies \exists y \in T : y p^k \equiv x p^k \pmod {p^{k+1}\Z_p}$
$\Box$

Lemma 8
$x, y \in \Z_p \implies \map F {x + y p ^k} \equiv \map F x + y p^k \map {F'} x \pmod {p^{k+1}\Z_p}$
$\Box$

Lemma 9
$\paren{c, d \in T : \tuple{b_0, b_1, \ldots, b_{k-1}, c}, \tuple{b_0, b_1, \ldots, b_{k-1}, d} \in S_{k+1}} \implies c = d$
$\Box$

Let:

$a = \ds \sum_{n = 0}^{k-1} b_n p_n$

From Lemma 6:

$\exists \beta \in \Z_p : \map F a = \beta p^k$

By hypothesis:

$a \equiv \alpha_0 \pmod{p\Z_p}$
From Polynomials of Congruent Ring Elements are Congruent:

$\map {F'} a \equiv \map {F'} {\alpha_0} \pmod{p\Z_p}$
By hypothesis:

$\map {F'} {\alpha_0} \not\equiv 0 \pmod{p\Z_p}$
Hence:

$\map {F'} a \not\equiv 0 \pmod{p\Z_p}$
It follows that:

$\map {F'} a \ne 0$

From Lemma 7:

$\exists b_k \in T : b_k p^k \equiv \dfrac {-\beta  p^k} {\map {F'} a} \pmod{p^{k+1}\Z_p}$

Let $a' = a + b_kp^k = \ds \sum_{n = 0}^k b_n p^n$.

We have:














\(\ds a'\)

\(=\)







\(\ds a + b_kp^k\)




















\(\ds \)

\(\equiv\)







\(\ds \alpha_0 + b_kp^k \pmod{p\Z_p}\)





As $a \equiv \alpha_0 \pmod{p\Z_p}$














\(\ds \)

\(\equiv\)







\(\ds \alpha_0 + 0 \pmod{p\Z_p}\)





As $b_kp^k \equiv 0 \pmod{p\Z_p}$














\(\ds \)

\(\equiv\)







\(\ds \alpha_0 \pmod{p\Z_p}\)










We have:














\(\ds \map F {a'}\)

\(\equiv\)







\(\ds \map F a + b_k p^k \map {F'} a  \pmod{ p^{k+1}\Z_p}\)





Lemma 8














\(\ds \)

\(\equiv\)







\(\ds \beta p^k + b_k p^k \map {F'} a  \pmod{ p^{k+1}\Z_p}\)





As $\map F a = \beta p^k$














\(\ds \)

\(\equiv\)







\(\ds \beta p^k + \dfrac {-\beta p^k} { \map {F'} a } \map {F'} a  \pmod{ p^{k+1}\Z_p}\)





As $b_k p^k \equiv \dfrac {-\beta  p^k} {\map {F'} a} \pmod{p^{k+1}\Z_p}$














\(\ds \)

\(\equiv\)







\(\ds \beta p^k + \paren {-\beta p^k} \pmod{ p^{k+1}\Z_p}\)





Cancel terms $\map {F'} a$














\(\ds \)

\(\equiv\)







\(\ds 0 \pmod{ p^{k+1}\Z_p}\)










It has been shown:

$\tuple{b_0, b_1, \ldots, b_{k-1}, b_k} \in S_{k+1}$
From Lemma 9:

$b_k$ is unique.

Let $\map b {b_0, b_1, \ldots, b_{k-1}} = b_k$.
The result follows.
$\blacksquare$





