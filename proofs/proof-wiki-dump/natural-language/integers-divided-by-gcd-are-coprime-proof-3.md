# 

Source: https://proofwiki.org/wiki/Integers_Divided_by_GCD_are_Coprime/Proof_3

Theorem
Let $a, b \in \Z$ be integers which are not both zero.
Let $d$ be a common divisor of $a$ and $b$, that is:

$\dfrac a d, \dfrac b d \in \Z$

Then:

$\gcd \set {a, b} = d$
if and only if:

$\gcd \set {\dfrac a d, \dfrac b d} = 1$
that is:

$\dfrac a {\gcd \set {a, b} } \perp \dfrac b {\gcd \set {a, b} }$
where:

$\gcd$ denotes greatest common divisor
$\perp$ denotes coprimality.


Proof
Because $d$ is a common divisor of $a$ and $b$, we may form the expressions:

$a = d r$
$b = d s$
where $r, s \in \Z$.

Then:














\(\ds d\)

\(=\)







\(\ds \gcd \set {a, b}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \gcd \set {d r, d s}\)




















\(\ds \)

\(=\)







\(\ds d \gcd \set {r, s}\)





GCD of Integers with Common Divisor








\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(=\)







\(\ds \gcd \set {r, s}\)





dividing through by $d$














\(\ds \)

\(=\)







\(\ds \gcd \set {\dfrac a d, \dfrac b d}\)





Definition of $r$ and $s$



$\blacksquare$





