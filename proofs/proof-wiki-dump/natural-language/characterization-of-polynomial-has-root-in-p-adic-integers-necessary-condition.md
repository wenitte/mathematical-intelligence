# 

Source: https://proofwiki.org/wiki/Characterization_of_Polynomial_has_Root_in_P-adic_Integers/Necessary_Condition

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $\map F X \in \Z_p \sqbrk X$ be a polynomial over $\Z_p$.
Let $a \in \Z_p$.
Let $\map F a  = 0$.

Then:

there exists a sequence $\sequence {a_n}$ of integers:
$(1): \quad \ds \lim_{n \mathop \to \infty} {a_n} = a$
$(2): \quad \map F {a_n} \equiv 0 \mod {p^{n + 1} \Z_p}$
where $\map F {a_n} \equiv 0 \mod {p^{n + 1} \Z_p}$ denotes congruence modulo the ideal $p^{n + 1} \Z_p$


Proof
Let $\map F a  = 0$.
Let $a = \ds \sum_{j \mathop = 0}^\infty d_j p^j$ be the $p$-adic expansion of $a$.
For all $n \in \N_{>0}$, let:

$a_n = \ds \sum_{j \mathop = 0}^{n - 1} d_j p^j$

By definition of $p$-adic expansion:

$\ds \lim_{n \mathop \to \infty} {a_n} = a$

By definition of $p$-adic expansion of a $p$-adic integer:

$\forall n \in \N_{>0} : a_n \in \Z$

We have:










\(\ds \forall n \in \N_{>0}: \, \)



\(\ds a_n\)

\(\equiv\)







\(\ds a \pmod {p^n \Z_p}\)





Partial Sum Congruent to P-adic Integer Modulo Power of p








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{>0}: \, \)



\(\ds \map F {a_n}\)

\(\equiv\)







\(\ds \map F a \pmod {p^n \Z_p}\)





Polynomials of Congruent Ring Elements are Congruent














\(\ds \)

\(\equiv\)







\(\ds 0 \pmod {p^n\Z_p}\)





as $\map F a = 0$








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \N_{>0}: \, \)



\(\ds \map F {a_n}\)

\(\equiv\)







\(\ds 0 \pmod {p^n}\)





Congruence Modulo Equivalence for Integers in P-adic Integers



$\blacksquare$





