# 

Source: https://proofwiki.org/wiki/P-adic_Norm_Characterisation_of_Divisibility_by_Power_of_p

Theorem
Let $p \in \N$ be a prime.
Let $\Q$ denote the rational numbers.
Let $\norm{\,\cdot\,}$ denote the $p$-adic norm on $\Q$.

Then:

$\forall a, b \in \Z: a \equiv b \pmod {p^n} \iff \norm {a - b}_p \le p^{-n}$
Proof
Let $a, b \in \Z$.
We have:














\(\ds a \equiv b \pmod {p^n}\)

\(\iff\)







\(\ds p^n \divides \paren{a - b}\)





Definition of Congruence Modulo Integer














\(\ds \)

\(\iff\)







\(\ds n \le sup(m : p^m \divides \paren{a - b}\)





Definition of Supremum of Set














\(\ds \)

\(\iff\)







\(\ds n \le \map {\nu_p} {a-b}\)





Definition of P-adic Valuation














\(\ds \)

\(\iff\)







\(\ds p^n \le p^{\map {\nu_p} {a-b} }\)





Power Function on Base Greater than One is Strictly Increasing














\(\ds \)

\(\iff\)







\(\ds \dfrac 1 {p^{\map {\nu_p} {a-b} } } \le \dfrac 1 {p^n}\)





Inversion Mapping Reverses Ordering in Ordered Group














\(\ds \)

\(\iff\)







\(\ds \norm {a - b}_p \le p^{-n}\)





Definition of P-adic Norm



$\blacksquare$





