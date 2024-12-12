# 

Source: https://proofwiki.org/wiki/Coprimality_Relation_is_not_Antisymmetric

Theorem
Consider the coprimality relation on the set of integers:

$\forall x, y \in \Z: x \perp y \iff \gcd \set {x, y} = 1$
where $\gcd \set {x, y}$ denotes the greatest common divisor of $x$ and $y$.
Then:

$\perp$ is not antisymmetric.


Proof
Proof by Counterexample:
We have:

$\gcd \set {3, 5} = 1 = \gcd \set {5, 3}$
and so:

$3 \perp 5$ and $5 \perp 3$
However, it is not the case that $3 = 5$.
The result follows by definition of antisymmetric relation.
$\blacksquare$





