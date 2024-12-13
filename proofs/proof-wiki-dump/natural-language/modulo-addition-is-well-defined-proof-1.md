# 

Source: https://proofwiki.org/wiki/Modulo_Addition_is_Well-Defined/Proof_1

Theorem
Let $m \in \Z$ be an integer.
Let $\Z_m$ be the set of integers modulo $m$.

The modulo addition operation on $\Z_m$, defined by the rule:

$\eqclass a m +_m \eqclass b m = \eqclass {a + b} m$
is a well-defined operation.

That is:

If $a \equiv b \pmod m$ and $x \equiv y \pmod m$, then $a + x \equiv b + y \pmod m$.


Proof
We need to show that if:

$\eqclass {x'} m = \eqclass x m$
$\eqclass {y'} m = \eqclass y m$
then:

$\eqclass {x' + y'} m = \eqclass {x + y} m$

Since:

$\eqclass {x'} m = \eqclass x m$
and:

$\eqclass {y'} m = \eqclass y m$
it follows from the definition of set of integers modulo $m$ that:

$x \equiv x' \pmod m$
and:

$y \equiv y' \pmod m$

By definition, we have:

$x \equiv x' \pmod m \implies \exists k_1 \in \Z: x = x' + k_1 m$
$y \equiv y' \pmod m \implies \exists k_2 \in \Z: y = y' + k_2 m$
which gives us:

$x + y = x' + k_1 m + y' + k_2 m = x' + y' + \paren {k_1 + k_2} m$
As $k_1 + k_2$ is an integer, it follows that, by definition:

$x + y \equiv \paren {x' + y'} \pmod m$

Therefore, by the definition of integers modulo $m$:

$\eqclass {x' + y'} m = \eqclass {x + y} m$
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: A Little Number Theory
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Integral Domains: $\S 6$. The Residue Classes: Theorem $4$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-1}$ Basic Properties of Congruences: Theorem $\text {4-2}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Proposition $2.31$




