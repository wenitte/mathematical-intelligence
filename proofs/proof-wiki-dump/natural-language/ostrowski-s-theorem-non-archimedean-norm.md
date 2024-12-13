# 

Source: https://proofwiki.org/wiki/Ostrowski%27s_Theorem/Non-Archimedean_Norm



Theorem
Let $\norm {\, \cdot \,}$ be a non-trivial non-Archimedean norm on the rational numbers $\Q$.

Then $\norm {\, \cdot \,}$ is equivalent to the $p$-adic norm $\norm {\, \cdot \,}_p$ for some prime $p$.


Proof
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


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1$ Absolute Values on $\Q$, Theorem $3.1.3$
2007: Svetlana Katok: p-adic Analysis Compared with Real: $\S 1.9$ Metrics and norms on the rational numbers. Ostrowski’s Theorem, Theorem $1.50$




