# 

Source: https://proofwiki.org/wiki/Divisor_Divides_Multiple



Theorem
Let $a, b$ be integers.
Let:

$a \divides b$
where $\divides$ denotes divisibility.

Then:

$\forall c \in \Z: a \divides b c$


Proof 1
Let $a \divides b$.
From Integer Divides Zero:

$a \divides 0$
Thus $a$ is a common divisor of $b$ and $0$.

From Common Divisor Divides Integer Combination:

$\forall p, q \in \Z: a \divides \paren {p \cdot b + q \cdot 0}$
Putting $p = c$ and $q = 1$ (for example):

$a \divides \paren {c b + 0}$
Hence the result.
$\blacksquare$


Proof 2













\(\ds a\)

\(\divides\)







\(\ds b\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in \Z: \, \)



\(\ds b\)

\(=\)







\(\ds x a\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds b c\)

\(=\)







\(\ds x c a\)














\(\ds \leadsto \ \ \)

\(\ds \exists z \in \Z: \, \)



\(\ds b c\)

\(=\)







\(\ds z a\)





where $z = x c$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\divides\)







\(\ds b c\)





Definition of Divisor of Integer



$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $2 \ \text{(a)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: $\mathbf D \, 5$
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Corollary $1$




