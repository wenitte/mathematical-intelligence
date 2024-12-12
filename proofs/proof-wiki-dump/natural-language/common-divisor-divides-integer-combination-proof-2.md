# 

Source: https://proofwiki.org/wiki/Common_Divisor_Divides_Integer_Combination/Proof_2

Theorem
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
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 10$. Divisibility: Theorem $16 \ \text{(iii)}$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Example $\text {2-4}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 11.4$: The division algorithm




