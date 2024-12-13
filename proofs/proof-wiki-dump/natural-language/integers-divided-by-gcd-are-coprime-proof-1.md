# 

Source: https://proofwiki.org/wiki/Integers_Divided_by_GCD_are_Coprime/Proof_1

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
Let $d = \gcd \set {a, b}$.
By definition of divisor:

$d \divides a \iff \exists s \in \Z: a = d s$
$d \divides b \iff \exists t \in \Z: b = d t$
So:










\(\ds \exists m, n \in \Z: \, \)



\(\ds d\)

\(=\)







\(\ds m a + n b\)





Bézout's Identity








\(\ds \leadstoandfrom \ \ \)





\(\ds d\)

\(=\)







\(\ds m d s + n d t\)





Definition of $s$ and $t$








\(\ds \leadstoandfrom \ \ \)





\(\ds 1\)

\(=\)







\(\ds m s + n t\)





dividing through by $d$








\(\ds \leadstoandfrom \ \ \)





\(\ds \gcd \set {s, t}\)

\(=\)







\(\ds 1\)





Bézout's Identity








\(\ds \leadstoandfrom \ \ \)





\(\ds \gcd \set {\frac a d, \frac b d}\)

\(=\)







\(\ds 1\)





Definition of $s$ and $t$



$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Example $\text {2-10}$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Theorem $2 \text{-} 4$: Corollary $1$




