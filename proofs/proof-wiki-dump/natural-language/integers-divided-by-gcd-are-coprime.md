# 

Source: https://proofwiki.org/wiki/Integers_Divided_by_GCD_are_Coprime



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


Proof 1
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


Proof 2
Let $d = \gcd \set {a, b}$.
We have:

$(1): d \divides a \iff \exists s \in \Z: a = d s$
$(2): d \divides b \iff \exists t \in \Z: b = d t$
We have to prove:

$\gcd \set {s, t} = 1$
Aiming for a contradiction, suppose $\gcd \set {s, t} \ne 1$.
So:

$(3): \exists k \in \N \setminus \set 1$ such that $k \divides s \land k \divides t$
So:

$(4): \exists m, n \in \N: s = k m, t = k n$
Substituting from $(4)$ in $(1)$ and $(2)$:

$a = d k m$, $b = d k n$
Therefore:

$ d k \divides a \land d k \divides b$
From $(3)$ we have:














\(\ds \)

\(\)







\(\ds k \in \N \land k \ne 1\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds k > 1\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds d k > d\)









As $d k$ is a common divisor of $a$ and $b$ greater than $d$, this contradicts $d = \gcd \set {a, b}$. 
So our initial assumption that $\gcd \set {s, t} \ne 1$ is false. 
Therefore, from Proof by Contradiction, we have:

$\gcd \set {s, t} = 1 \implies \gcd \set {\dfrac a d, \dfrac b d} = 1$
$\blacksquare$


Proof 3
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


Also presented as
It can be expressed so as not to include fractions:

$\gcd \set {a, b} = d \iff \exists s, t \in \Z: a = d s \land b = d t \land \gcd \set {s, t} = 1$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm: Problems $2.3$: $3$




