# 

Source: https://proofwiki.org/wiki/Common_Divisor_Divides_Integer_Combination



Corollary to Common Divisor in Integral Domain Divides Linear Combination
Let $c$ be a common divisor of two integers $a$ and $b$.
That is:

$a, b, c \in \Z: c \divides a \land c \divides b$

Then $c$ divides any integer combination of $a$ and $b$:

$\forall p, q \in \Z: c \divides \paren {p a + q b}$


Corollary
$c \divides \paren {a + b}$


General Result
Let $c$ be a common divisor of a set of integers $A := \set {a_1, a_2, \dotsc, a_n}$.
That is:

$\forall x \in A: c \divides x$

Then $c$ divides any integer combination of elements of $A$:

$\forall x_1, x_2, \dotsc, x_n \in \Z: c \divides \paren {a_1 x_2 + a_2 x_2 + \dotsb + a_n x_n}$


Proof 1
We have that the Integers form Integral Domain.
The result then follows from Common Divisor in Integral Domain Divides Linear Combination.
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

\(\ds \forall p, q \in \Z: \, \)



\(\ds p a + q b\)

\(=\)







\(\ds p x c + q y c\)





Substitution for $a$ and $b$














\(\ds \)

\(=\)







\(\ds \paren {p x + q y} c\)





Integer Multiplication Distributes over Addition








\(\ds \leadsto \ \ \)

\(\ds \exists z \in \Z: \, \)



\(\ds p a + q b\)

\(=\)







\(\ds z c\)





where $z = p x + q y$








\(\ds \leadsto \ \ \)





\(\ds c\)

\(\divides\)







\(\ds \paren {p a + q b}\)





Definition of Divisor of Integer



$\blacksquare$


Sources
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.1$ Divisibility of integers
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Theorem $2 \text{-} 2 \ (7)$
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): $1$ Divisibility: $1.1$ The Euclidean algorithm and unique factorization: $\text {(v)}$




