# 

Source: https://proofwiki.org/wiki/Common_Divisor_in_Integral_Domain_Divides_Linear_Combination



Theorem
Let $\struct {D, +, \times}$ be an integral domain.

Let $c$ be a common divisor of two elements $a$ and $b$ of $D$.
That is:

$a, b, c \in D: c \divides a \land c \divides b$

Then:

$\forall p, q \in D: c \divides \paren {p \times a + q \times b}$


Corollary
Let $c$ be a common divisor of two integers $a$ and $b$.
That is:

$a, b, c \in \Z: c \divides a \land c \divides b$

Then $c$ divides any integer combination of $a$ and $b$:

$\forall p, q \in \Z: c \divides \paren {p a + q b}$


Proof













\(\ds c\)

\(\divides\)







\(\ds a\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in D: \, \)



\(\ds a\)

\(=\)







\(\ds x \times c\)





Definition of Divisor of Ring Element














\(\ds c\)

\(\divides\)







\(\ds b\)














\(\ds \leadsto \ \ \)

\(\ds \exists y \in D: \, \)



\(\ds b\)

\(=\)







\(\ds y \times c\)





Definition of Divisor of Ring Element








\(\ds \leadsto \ \ \)

\(\ds \forall p, q \in D: \, \)



\(\ds p \times a + q \times b\)

\(=\)







\(\ds p \times x \times c + q \times y \times c\)





substituting for $a$ and $b$














\(\ds \)

\(=\)







\(\ds \paren {p \times x + q \times y} c\)





as $\times$ is distributive over $+$








\(\ds \leadsto \ \ \)

\(\ds \exists z \in D: \, \)



\(\ds p \times a + q \times b\)

\(=\)







\(\ds z \times c\)





where $z = p \times x + q \times y$








\(\ds \leadsto \ \ \)





\(\ds c\)

\(\divides\)







\(\ds \paren {p \times a + q \times b}\)





Definition of Divisor of Ring Element



$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 26$. Divisibility: Theorem $49 \ \text{(iii)}$




