# 

Source: https://proofwiki.org/wiki/Existence_of_Greatest_Common_Divisor/Proof_2

Theorem
Let $a, b \in \Z$ be integers such that $a \ne 0$ or $b \ne 0$.
Then the greatest common divisor of $a$ and $b$ exists.


Proof
By definition of greatest common divisor, we aim to show that there exists $c \in \Z_{>0}$ such that:














\(\ds c\)

\(\divides\)







\(\ds a\)




















\(\ds c\)

\(\divides\)







\(\ds b\)









and:

$d \divides a, d \divides b \implies d \divides c$

Consider the set $S$:

$S = \set {s \in \Z_0: \exists x, y \in \Z: s = a x + b y}$
$S$ is not empty, because by setting $x = 1$ and $y = 0$ we have at least that $a \in S$.
From the Well-Ordering Principle, there exists a smallest $c \in S$.

So, by definition, we have $c > 0$ is the smallest such that $c = a x + b y$ for some $x, y \in \Z$.
Let $d$ be such that $d \divides a$ and $d \divides b$.
Then from Common Divisor Divides Integer Combination:

$d \divides a x + b y$
That is:

$d \divides c$
We have that:










\(\ds \exists t, u \in \Z: \, \)



\(\ds a\)

\(=\)







\(\ds c t + u:\)

\(\ds 0 \le u < c\)



Division Theorem








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds a x t + b y t + u\)





Definition of $c$








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds r \paren {1 - x t} + b \paren {-y t}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds 0\)





as $u < c$ and the definition of $c$








\(\ds \leadsto \ \ \)





\(\ds c\)

\(\divides\)







\(\ds a\)





Definition of Divisor of Integer



Mutatis mutandis:

$c \divides b$

Now suppose $c'$ is such that:














\(\ds c'\)

\(\divides\)







\(\ds a\)




















\(\ds c'\)

\(\divides\)







\(\ds b\)









and:

$d \divides a, d \divides b \implies d \divides c'$
Then we have immediately that:

$c' \divides c$
and by the same coin:
$c \divides c'$
and so:

$c = c'$
demonstrating that $c$ is unique.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 6$: The division process in $I$
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): $1$ Divisibility: $1.1$ The Euclidean algorithm and unique factorization: Theorem $1.2$
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 11$. Highest Common Factor: Theorem $19$




