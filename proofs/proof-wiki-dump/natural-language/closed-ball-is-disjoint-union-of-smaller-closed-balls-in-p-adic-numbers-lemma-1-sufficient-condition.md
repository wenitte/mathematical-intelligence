# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Disjoint_Union_of_Smaller_Closed_Balls_in_P-adic_Numbers/Lemma_1/Sufficient_Condition

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $y \in \Q_p$
Let $n, m \in Z$, such that $n < m$.
Let there exist $i \in \Z$:

$(1): \quad 0 \le i \le p^\paren {m - n} - 1$
$(2): \quad \norm {y - i p^n}_p \le p^{-m}$
Then:

$\norm y_p \le p^{-n}$


Proof
We have that P-adic Norm satisfies Non-Archimedean Norm Axioms:.
Hence:














\(\ds \norm y_p\)

\(=\)







\(\ds \norm {y - i p^n + i p^n}_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {y - i p^n}_p, \norm {i p^n}_p}\)





Non-Archimedean Norm Axiom $\text N 4$: Ultrametric Inequality



By assumption:

$\norm {y - i p^n} \le p^{-m} \le p^{-n}$
and:














\(\ds \norm {i p^n}_p\)

\(=\)







\(\ds \norm i_p \norm {p^n}_p\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(\le\)







\(\ds 1 \cdot p^{-n}\)





As $i \in \Z \subseteq \Z_p$














\(\ds \)

\(=\)







\(\ds p^{-n}\)









Hence:

$\max \set {\norm {y - i p^n}_p, \norm {i p^n}_p} \le p^{-n}$
So:

$\norm y_p \le p^{-n}$
$\blacksquare$





