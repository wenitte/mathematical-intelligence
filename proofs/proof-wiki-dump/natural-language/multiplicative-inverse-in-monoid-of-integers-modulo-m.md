# 

Source: https://proofwiki.org/wiki/Multiplicative_Inverse_in_Monoid_of_Integers_Modulo_m

Theorem
Let $\struct {\Z_m, \times_m}$ be the multiplicative monoid of integers modulo $m$.

Then:

$\eqclass k m \in \Z_m$ has an inverse in $\struct {\Z_m, \times_m}$
if and only if:

$k \perp m$


Proof
First, suppose $k \perp m$.
That is:

$\gcd \set {k, m} = 1$
By Bézout's Identity:

$\exists u, v \in \Z: u k + v m = 1$
Thus:

$\eqclass {u k + v m} m = \eqclass {u k} m = \eqclass u m \eqclass k m = \eqclass 1 m$
Thus:

$\eqclass u m$ is an inverse of $\eqclass k m$

Suppose that:

$\exists u \in \Z: \eqclass u m \eqclass k m = \eqclass {u k} m = 1$
Then:

$u k \equiv 1 \pmod m$
and:

$\exists v \in \Z: u k + v m = 1$
Thus from Bézout's Identity, $k \perp m$.
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.11$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Examples of Group Structure: $\S 34$




