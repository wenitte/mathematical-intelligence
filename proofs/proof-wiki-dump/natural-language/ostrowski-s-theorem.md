# 

Source: https://proofwiki.org/wiki/Ostrowski%27s_Theorem



Theorem
Every non-trivial norm on the rational numbers $\Q$ is equivalent to either:

the $p$-adic norm $\norm {\, \cdot \,}_p$ for some prime $p$
or:

the absolute value, $\size {\, \cdot \,}$.


Proof
Let $\norm {\, \cdot \,}$ be a non-trivial norm on the rational numbers $\Q$.


Archimedean Norm Case
Let $\norm {\, \cdot \,}$ be an Archimedean norm.

By Characterisation of Non-Archimedean Division Ring Norms then:

$\exists n \in \N$ such that $\norm n > 1$

Let $n_0 = \min \set {n \in \N : \norm n > 1}$
By Norm of Unity then:

$n_0 > 1$

Let $\alpha = \dfrac {\log \norm {n_0} } {\log n_0}$
Since $n_0, \norm n_0 > 1$ then:

$\alpha > 0$


Lemma 1.1
$\forall n \in N: \norm n \le n^\alpha$
$\Box$


Lemma 1.2
$\forall n \in N: \norm n \ge n^\alpha$
$\Box$

Hence:

$\forall n \in \N: \norm n = n^\alpha = \size n^\alpha$
By Equivalent Norms on Rational Numbers then $\norm {\, \cdot \,}$ is equivalent to the absolute value $\size {\, \cdot \,}$.
$\Box$


Non-Archimedean Norm Case
Let $\norm {\, \cdot \,}$ be a non-Archimedean Norm.

From Characterisation of Non-Archimedean Division Ring Norms then:

$\forall n \in \N: \norm n \le 1$


Lemma 2.1
$\exists n \in \N: 0 < \norm n < 1$.
$\Box$

Let $n_0 = \min \set {n \in N : \norm n < 1}$.


Lemma 2.2
$n_0$ is a prime number.
$\Box$

Let $p = n_0$.
Let $\alpha = - \dfrac {\log \norm p } {\log p}$ then:

$\norm p = p^{-\alpha} = \paren {p^{-1}}^\alpha = \norm p_p^\alpha$

Let $b \in N$

Case 1: $p \nmid b$
Let $p \nmid b$.
From Prime not Divisor implies Coprime:

$p$ and $b$ are coprime, that is, $p \perp b$

From Corollary 5 of Three Points in Ultrametric Space have Two Equal Distances:

$\norm b = 1$

By the definition of the $p$-adic norm:

$\norm b_p = 1$
Hence:

$\norm b = 1 = 1^\alpha = \norm b_p^\alpha$
$\Box$

Case 2: $p \divides b$
Let $p \divides b$.
Let $\nu = \map {\nu_p} b$ where $\nu_p$ is the $p$-adic valuation on $\Z$.
Then:

$b = p^\nu c$
where $p \nmid c$
From #Case 1:

$\norm c = 1$
Hence:














\(\ds \norm b\)

\(=\)







\(\ds \norm p^\nu \norm {c}\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm p^\nu\)




















\(\ds \)

\(=\)







\(\ds \norm p_p^{\alpha \nu}\)




















\(\ds \)

\(=\)







\(\ds \paren {p^{-1} }^{\alpha \nu}\)





Definition of $p$-adic norm














\(\ds \)

\(=\)







\(\ds p^{-\alpha \nu}\)




















\(\ds \)

\(=\)







\(\ds \paren {p^{-\nu} }^\alpha\)




















\(\ds \)

\(=\)







\(\ds \norm b_p^\alpha\)





Definition of $p$-adic norm



$\Box$

In either case:

$\norm b = \norm b_p^\alpha$
Since $b$ was arbitrary, it has been shown:

$\forall b \in \N: \norm b = \norm b_p^\alpha$
From Equivalent Norms on Rational Numbers:

$\norm {\, \cdot \,}$ is equivalent to the $p$-adic norm $\norm {\, \cdot \,}_p$.
$\blacksquare$


Also see
Complete Archimedean Valued Field is Real or Complex Numbers, also sometimes called Ostrowski's theorem.


Source of Name
This entry was named for Alexander Markowich Ostrowski.


Historical Note
In the same paper as the one he presented this theorem, published in $1918$, Ostrowski also proved that, up to isomorphism, $\R$ and $\C$ are the only fields that are complete with respect to an archimedean norm.
That theorem is sometimes also referred to as Ostrowski's theorem.


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.1$ Absolute Values on $\Q$: Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem: Theorem $1.50$




