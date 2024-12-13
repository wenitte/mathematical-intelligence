# 

Source: https://proofwiki.org/wiki/Multiplicative_Inverse_in_Ring_of_Integers_Modulo_m

Theorem
Let $\struct {\Z_m, +_m, \times_m}$ be the ring of integers modulo $m$.

Then $\eqclass k m \in \Z_m$ has an inverse in $\struct {\Z_m, \times_m}$ if and only if $k \perp m$.


Proof 1
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


Proof 2
From Ring of Integers Modulo m is Ring, $\left({\Z_m, +_m, \times_m}\right)$ is a commutative ring with unity $\left[\!\left[{1}\right]\!\right]_m$.
Thus by definition $\left({\Z_m, \times_m}\right)$ is a commutative monoid.
The result follows from Multiplicative Inverse in Monoid of Integers Modulo m.
$\blacksquare$





