# 

Source: https://proofwiki.org/wiki/Common_Divisor_Divides_Difference



Theorem
Let $c$ be a common divisor of two integers $a$ and $b$.
That is:

$a, b, c \in \Z: c \divides a \land c \divides b$

Then:

$c \divides \paren {a - b}$


Proof 1
Let $c \divides a \land c \divides b$.

From Common Divisor Divides Integer Combination:

$\forall p, q \in \Z: c \divides \paren {p a + q b}$

Putting $p = 1$ and $q = -1$:

$c \divides \paren {a - b}$
$\blacksquare$


Proof 2













\(\ds c\)

\(\divides\)







\(\ds a\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \Z: \, \)



\(\ds a\)

\(=\)







\(\ds x c\)





Definition of Divisor of Integer














\(\ds c\)

\(\divides\)







\(\ds b\)














\(\ds \leadsto \ \ \)

\(\ds \exists y \in \Z: \, \)



\(\ds b\)

\(=\)







\(\ds y c\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds a - b\)

\(=\)







\(\ds x c - y c\)





substituting for $a$ and $b$














\(\ds \)

\(=\)







\(\ds \paren {x - y} c\)





Integer Multiplication Distributes over Addition








\(\ds \leadsto \ \ \)

\(\ds \exists z \in \Z: \, \)



\(\ds a - b\)

\(=\)







\(\ds z c\)





where $z = x - y$








\(\ds \leadsto \ \ \)





\(\ds c\)

\(\divides\)







\(\ds \paren {a - b}\)





Definition of Divisor of Integer



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 11.4$: The division algorithm
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: $\mathbf D \, 4$




