# 

Source: https://proofwiki.org/wiki/Characterization_of_Polynomial_has_Root_in_P-adic_Integers/Sufficient_Condition

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $\map F X \in \Z_p \sqbrk X$ be a polynomial over $\Z_p$.
Let $a \in \Z_p$.
Let there exist a sequence $\sequence{a_n}$ of integers: 

$(1): \quad \ds \lim_{n \mathop \to \infty} {a_n} = a$
$(2): \quad \map F {a_n} \equiv 0 \mod {p^{n + 1} \Z_p}$
where $\map F {a_n} \equiv 0 \mod {p^{n + 1} \Z_p}$ denotes congruence modulo the ideal $p^{n + 1} \Z_p$.

Then:

$\map F a  = 0$


Proof
Let there exist a sequence $\sequence{a_n}$ of integers: 

$(1): \quad \ds \lim_{n \mathop \to \infty} {a_n} = a$
$(2): \quad \map F {a_n} \equiv 0 \mod {p^{n + 1} \Z_p}$

We have:










\(\ds \forall k \in \N: \, \)



\(\ds a\)

\(\equiv\)







\(\ds a_k \pmod {p^{n + 1} \Z_p}\)





Partial Sum Congruent to P-adic Integer Modulo Power of p








\(\ds \leadsto \ \ \)

\(\ds \forall k \in \N: \, \)



\(\ds \map F a\)

\(\equiv\)







\(\ds \map F {a_k} \pmod {p^{n + 1} \Z_p}\)





Polynomials of Congruent Ring Elements are Congruent














\(\ds \)

\(\equiv\)







\(\ds 0 \pmod {p^{n + 1} \Z_p}\)





as $\map F {a_k} \equiv 0 \pmod {p^{n + 1} \Z_p}$








\(\ds \leadsto \ \ \)

\(\ds \forall k \in \N: \, \)



\(\ds \map F a\)

\(\in\)







\(\ds p^{n + 1} \Z_p\)





Definition of Congruence Modulo an Ideal








\(\ds \leadsto \ \ \)

\(\ds \forall k \in \N: \, \)



\(\ds \norm {\map F a}_p\)

\(\le\)







\(\ds p^{-k - 1}\)





Characterization of Closed Ball in P-adic Numbers








\(\ds \leadsto \ \ \)





\(\ds \norm {\map F a}_p\)

\(\le\)







\(\ds \lim_{k \mathop \to \infty} p^{-k - 1}\)





Squeeze Theorem for Real Sequences














\(\ds \)

\(=\)







\(\ds 0\)





Sequence of Powers of Number less than One








\(\ds \leadsto \ \ \)





\(\ds \norm {\map F a}_p\)

\(=\)







\(\ds 0\)





$p$-adic norm is a  mapping from $\Q_p$ to the non-negative reals








\(\ds \leadsto \ \ \)





\(\ds \map F a\)

\(=\)







\(\ds 0\)





Non-Archimedean Norm Axiom $\text N 1$: Positive Definiteness



$\blacksquare$





