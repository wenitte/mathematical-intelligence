# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Disjoint_Union_of_Smaller_Closed_Balls_in_P-adic_Numbers/Lemma_1



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $n, m \in Z$, such that $n < m$.

Then:

$\forall y \in \Q_p: \norm y_p \le p^{-n}$ if and only if there exists $i \in \Z$ such that:
$(1)\quad 0 \le i \le p^{\paren {m - n}} - 1$
$(2)\quad \norm {y - i p^n}_p \le p^{-m}$


Proof
Necessary Condition
Let $y \in \Q_p$.
Let $\norm y_p \le p^{-n}$.

We have that P-adic Norm satisfies Non-Archimedean Norm Axioms.
Hence:














\(\ds \norm y_p\)

\(\le\)







\(\ds p^{-n}\)














\(\ds \leadsto \ \ \)





\(\ds p^n \norm{y}_p\)

\(\le\)







\(\ds 1\)





multiplying both sides by $p^n$








\(\ds \leadsto \ \ \)





\(\ds \norm{p^{-n} }_p \norm{y}_p\)

\(\le\)







\(\ds 1\)





Definition of $p$-adic norm








\(\ds \leadsto \ \ \)





\(\ds \norm{p^{-n} y}_p\)

\(\le\)







\(\ds 1\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity








\(\ds \leadsto \ \ \)





\(\ds \map {B_1^-} {p^{-n}y}\)

\(=\)







\(\ds \map {B_1^-} 0\)





Characterization of Closed Ball in P-adic Numbers




From Integers are Dense in Unit Ball of P-adic Numbers:

$\exists \mathop k \in \Z : \norm{p^{-n} y - k}_p \le p^\paren {n - m}$

From Residue Classes form Partition of Integers:

$\exists \mathop 0 \le i \le p^\paren {m - n} - 1: p^\paren {m - n} \divides k - i$
By definition of the $p$-adic norm:

$\norm {k - i}_p  \le p^\paren {n - m}$

It follows that:














\(\ds \norm {p^{-n} y - i}_p\)

\(\le\)







\(\ds \max \set {\norm {p^{-n} y - k}_p, \norm {i - k}_p}\)





Corollary to P-adic Metric on P-adic Numbers is Non-Archimedean Metric














\(\ds \)

\(\le\)







\(\ds p^\paren {n - m}\)














\(\ds \leadsto \ \ \)





\(\ds \norm {p^{-n} }_p \norm {y - i p^n}_p\)

\(\le\)







\(\ds p^\paren {n - m}\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity








\(\ds \leadsto \ \ \)





\(\ds p^n \norm {y - i p^n}_p\)

\(\le\)







\(\ds p^\paren {n - m}\)





Definition of $p$-adic norm








\(\ds \leadsto \ \ \)





\(\ds \norm {y - i p^n}_p\)

\(\le\)







\(\ds p^{-m}\)





dividing both sides by $p^{-n}$



$\Box$


Sufficient Condition
Let $y\in \Q_p$.
Let there exist $i \in \Z$ such that:

$(1) \quad 0 \le i \le p^{\paren {m - n}} - 1$
$(2) \quad \norm {y - i p^n}_p \le p^{-m}$

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





