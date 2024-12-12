# 

Source: https://proofwiki.org/wiki/Divisors_of_Product_of_Coprime_Integers

Theorem
Let $a, b, c \in \Z$ be integers.
Let the symbol $\divides$ denote the divisibility relation.
Let $a \divides b c$, where $b \perp c$.
Then $\tuple {r, s}$ satisfying:

$a = r s$, where $r \divides b$ and $s \divides c$
is unique up to absolute value with:

$\size r = \gcd \set {a, b}$
$\size s = \gcd \set {a, c}$


Corollary
Let $p$ be a prime.
Let $p \divides b c$, where $b \perp c$.

Then $p \divides b$ or $p \divides c$, but not both.


Proof
By Divisor of Product, there exists $\tuple {r, s}$ satisfying:

$r \divides b$
$s \divides c$
$r s = a$

We have:

$r, s \divides a$
By definition of GCD:

$\gcd \set {a, b} \divides r$
$\gcd \set {a, c} \divides s$
By Absolute Value of Integer is not less than Divisors:

$\gcd \set {a, b} \le \size r$
$\gcd \set {a, c} \le \size s$

We also have:














\(\ds \size {r s}\)

\(\ge\)







\(\ds \gcd \set {a, b} \gcd \set {a, c}\)




















\(\ds \)

\(=\)







\(\ds \gcd \set {a, b c}\)





GCD with One Fixed Argument is Multiplicative Function














\(\ds \)

\(=\)







\(\ds \size a\)





GCD of Integer and Divisor














\(\ds \)

\(=\)







\(\ds \size {r s}\)










This forces both inequalities to be equalities, i.e.:

$\size r = \gcd \set {a, b}$
$\size s = \gcd \set {a, c}$
Hence $\tuple {r, s}$ is unique up to absolute value.
$\blacksquare$





