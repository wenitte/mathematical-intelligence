# 

Source: https://proofwiki.org/wiki/Integers_Divided_by_GCD_are_Coprime/Proof_2

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





