# 

Source: https://proofwiki.org/wiki/Canonical_P-adic_Expansion_of_Rational_is_Eventually_Periodic/Lemma_3

Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.
Let:

$a \in \Z, b \in Z_{> 0}$
Let:

$\forall n \in \N: \exists A_n, r_n \in \Z$:
$(\text a) \quad \dfrac a b = A_n + p^{n+1} \dfrac {r_n} b$
$(\text b) \quad \exists n_0 \in \N : \forall n \ge n_0 : -b \le r_n \le 0$

Then:

$\ds \lim_{n \mathop \to \infty} A_n = \dfrac a b$


Proof
Let $\epsilon \in \R_{> 0}$.
Let $M = \max \set {\norm{r_0}_p, \norm{r_1}_p, \ldots, \norm{r_{n_0}}_p, \norm{-1}_p, \norm{-2}_p, \ldots, \norm{-b}_p}$
From Power Function is Unbounded Above:

$\exists N \in \N: p^{N+1} >  \dfrac  M {\epsilon \norm b_p}$

We have:










\(\ds \forall n \in \N: n \ge N: \, \)



\(\ds \norm{\dfrac a b - A_n}_p\)

\(=\)







\(\ds \norm{p^{n+1} \dfrac {r_n} b} _p\)





By hypothesis














\(\ds \)

\(=\)







\(\ds \norm p_p^{n+1} \dfrac {\norm{r_n}_p} {\norm b_p}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\le\)







\(\ds \norm p_p^{n+1} \dfrac M {\norm b_p}\)





Definition of Max Operation














\(\ds \)

\(\le\)







\(\ds \dfrac 1 {p^{n+1} } \dfrac M {\norm b_p}\)





Definition of P-adic Norm














\(\ds \)

\(\le\)







\(\ds \dfrac 1 {p^{N+1} } \dfrac M {\norm b_p}\)





Power Function on Base between Zero and One is Strictly Decreasing














\(\ds \)

\(<\)







\(\ds \dfrac {\epsilon  \norm b_p } M \dfrac M {\norm b_p}\)





Choice of $N$














\(\ds \)

\(=\)







\(\ds \epsilon\)





Cancelling terms



By definition of convergence in $\struct {\Q_p, \norm {\,\cdot\,}_p}$:

$\ds \lim_{n \mathop \to \infty} A_n = \dfrac a b$
$\blacksquare$





