# 

Source: https://proofwiki.org/wiki/Ideals_of_P-adic_Integers



Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.

Then the ideals of $\Z_p$ are the principal ideals:

$\text a) \quad \set 0$
$\text b) \quad \forall k \in \N: p^k \Z_p$


Corollary
$\Z_p$ is a principal ideal domain


Proof
Let $\nu_p: \Q_p \to \Z \cup \set {+\infty}$ denote the $p$-adic valuation on the $p$-adic numbers.
Let $\Z_p^\times$ denote the $p$-adic units.

Let $I \ne \set 0$ be a non-null ideal of $\Z_p$.
Hence:

$\exists j \in I : \map {\nu_p} j < \infty$
Let:

$k = \inf \set {\map {\nu_p} i : i \in I}$
Hence:

$k \le j < \infty$

Let:

$a \in I : a \ne 0 \land \map {\nu_p} a = k$
From P-adic Number is Power of p Times P-adic Unit:

$\exists u \in \Z_p^\times : a = p^k u$

We have:














\(\ds p^k\)

\(=\)







\(\ds u^{-1} a\)




















\(\ds \)

\(\in\)







\(\ds I\)





Definition of Ideal of Ring








\(\ds \leadsto \ \ \)





\(\ds \paren {p^k}\)

\(=\)







\(\ds p^k\Z_p\)





Definition of Principal Ideal














\(\ds \)

\(\subseteq\)







\(\ds I\)





Definition of Ideal of Ring




Let $b \in I$.


Case 1 : $b \ne 0$
Let:

$w = \map {\nu_p} b$
Then:

$k \le w < \infty$
From P-adic Number is Power of p Times P-adic Unit:

$\exists u' \in \Z_p^\times : b = p^w u'$

We have:














\(\ds b\)

\(=\)







\(\ds p^w u'\)




















\(\ds \)

\(=\)







\(\ds p^k \cdot p^{w - k} u'\)





As $k \le w$














\(\ds \)

\(\in\)







\(\ds p^k \Z_p\)





Definition of Principal Ideal  and $p^{w - k} u' \in \Z_p$



$\Box$


Case 2 : $b = 0$
We have:














\(\ds b\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds p^k \cdot 0\)




















\(\ds \)

\(\in\)







\(\ds p^k \Z_p\)





Definition of Principal Ideal and $0 \in \Z_p$



$\Box$

In either case:
$b \in p^k \Z_p$
It follows that:

$I \subseteq p^k \Z_p$

By the definition of set equality:

$I = p^k \Z_p$
$\blacksquare$





