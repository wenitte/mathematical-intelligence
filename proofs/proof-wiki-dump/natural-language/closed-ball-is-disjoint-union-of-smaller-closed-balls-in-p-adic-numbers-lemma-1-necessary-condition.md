# 

Source: https://proofwiki.org/wiki/Closed_Ball_is_Disjoint_Union_of_Smaller_Closed_Balls_in_P-adic_Numbers/Lemma_1/Necessary_Condition

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $n, m \in Z$, such that $n < m$.
Let $y \in \Q_p$.
Let $\norm{y}_p \le p^{-n}$.

Then there exists $i \in \Z$ such that:

$(1) \quad 0 \le i \le p^\paren {m - n} - 1$
$(2) \quad \norm {y - i p^n}_p \le p^{-m}$


Proof
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



$\blacksquare$





