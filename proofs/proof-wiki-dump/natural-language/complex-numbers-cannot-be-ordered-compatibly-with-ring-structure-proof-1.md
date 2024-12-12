# 

Source: https://proofwiki.org/wiki/Complex_Numbers_cannot_be_Ordered_Compatibly_with_Ring_Structure/Proof_1

Theorem
Let $\struct {\C, +, \times}$ be the field of complex numbers.
There exists no total ordering on $\struct {\C, +, \times}$ which is compatible with the structure of $\struct {\C, +, \times}$.


Proof
Aiming for a contradiction, suppose there exists a relation $\preceq$ on $\C$ which is ordering compatible with the ring structure of $\C$.
That is:

$(1): \quad z \ne 0 \implies 0 \prec z \lor z \prec 0$, but not both
$(2): \quad 0 \prec z_1, z_2 \implies 0 \prec z_1 z_2 \land 0 \prec z_1 + z_2$
By Totally Ordered Ring Zero Precedes Element or its Inverse, $(1)$ can be replaced with:

$(1'): \quad z \ne 0 \implies 0 \prec z \lor 0 \prec -z$, but not both.

As $i \ne 0$, it follows that:

$0 \prec i$ or $0 \prec -i$

Suppose $0 \prec i$.
Then:














\(\ds 0\)

\(\prec\)







\(\ds i \times i\)





from $(2)$














\(\ds \)

\(=\)







\(\ds -1\)





Definition 1 of Complex Number




Otherwise, suppose $0 \prec \paren {-i}$.
Then:














\(\ds 0\)

\(\prec\)







\(\ds \paren {-i} \times \paren {-i}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds -1\)





Definition 1 of Complex Number




Thus by Proof by Cases:

$0 \prec -1$
Thus it follows that:














\(\ds 0\)

\(\prec\)







\(\ds \paren {-1} \times \paren {-1}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 1\)










Thus both:

$0 \prec -1$
and:

$0 \prec 1$

This contradicts hypothesis $(1')$:

$(1): \quad z \ne 0 \implies 0 \prec z \lor 0 \prec -z$, but not both

Hence, by Proof by Contradiction, there can be no such ordering.
$\blacksquare$


Historical Note
The fact that Complex Numbers cannot be Ordered Compatibly with Ring Structure was realized by Leonhard Paul Euler.





