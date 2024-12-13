# 

Source: https://proofwiki.org/wiki/P-adic_Integer_has_Unique_Coherent_Sequence_Representative/Lemma_2

Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rational numbers $\Q$.
Let $\sequence {\gamma_n}$ be a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$ such that:

$\forall j \in \N: \norm {\gamma_{j + 1} - \gamma_j }_p \le p^{-\paren {j + 1} }$
Let $\sequence {\alpha_n}$ be a sequence in $\Q$ such that:

$\forall j \in \N: \norm {\alpha_j - \gamma_j }_p \le p^{-\paren {j + 1} }$

Then:

$\forall j \in \N: \norm {\alpha_{j + 1} - \alpha_j }_p \le p^{-\paren {j + 1} }$


Proof
For all $j \in \N$:














\(\ds \norm {\alpha_{j + 1} - \alpha_j}_p\)

\(=\)







\(\ds \norm {\alpha_{j + 1} - \gamma_{j + 1} + \gamma_{j + 1} - \gamma_j + \gamma_j - \alpha_j}_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {\alpha_{j + 1} - \gamma_{j + 1} }_p \mathop , \norm {\gamma_{j + 1} - \gamma_j }_p \mathop , \norm{\gamma_j - \alpha_j}_p}\)




















\(\ds \)

\(\le\)







\(\ds \max \set {p^{-\paren{j + 2} } , \norm{\gamma_{j + 1} - \gamma_j }_p \mathop , p^{-\paren {j + 1} } }\)





Assumption on $\sequence{\alpha_n}$














\(\ds \)

\(\le\)







\(\ds \max \set {p^{-\paren {j + 2} } , p^{-\paren {j + 1} } , p^{-\paren {j + 1} } }\)





Assumption on $\sequence{\gamma_n}$














\(\ds \)

\(=\)







\(\ds p^{-\paren {j + 1} }\)





 Power Function on Integer between Zero and One is Strictly Decreasing



$\blacksquare$





