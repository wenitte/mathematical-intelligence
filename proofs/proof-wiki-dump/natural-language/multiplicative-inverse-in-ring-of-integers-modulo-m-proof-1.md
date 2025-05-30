# 

Source: https://proofwiki.org/wiki/Multiplicative_Inverse_in_Ring_of_Integers_Modulo_m/Proof_1

Theorem
Let $\struct {\Z_m, +_m, \times_m}$ be the ring of integers modulo $m$.

Then $\eqclass k m \in \Z_m$ has an inverse in $\struct {\Z_m, \times_m}$ if and only if $k \perp m$.


Proof
First, suppose $k \perp m$.
That is:

$\gcd \set {k, m} = 1$
Then, by Bézout's Identity:

$\exists u, v \in \Z: u k + v m = 1$

Thus:

$\eqclass {u k + v m} m = \eqclass {u k} m = \eqclass u m \eqclass k m = \eqclass 1 m$
Thus $\eqclass u m$ is an inverse of $\eqclass k m$.

Suppose that:

$\exists u \in \Z: \eqclass u m \eqclass k m = \eqclass {u k} m = 1$.
Then:

$u k \equiv 1 \pmod m$
and:

$\exists v \in \Z: u k + v m = 1$

Thus from Bézout's Identity:

$k \perp m$
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 1$. Rings and Fields: Example $4$




