# 

Source: https://proofwiki.org/wiki/Coprimality_Relation_is_Non-Reflexive

Theorem
Consider the coprimality relation on the set of integers:

$\forall x, y \in \Z: x \perp y \iff \gcd \set {x, y} = 1$
where $\gcd \set {x, y}$ denotes the greatest common divisor of $x$ and $y$.
Then:

$\perp$ is non-reflexive.


Proof
Proof by Counterexample:
We have from GCD of Integer and Divisor:

$\gcd \set {n, n} = n$
and so, for example:

$\gcd \set {2, 2} = 2$
and so:

$2 \not \perp 2$
Hence $\perp$ is not reflexive.
But we also note that:

$\gcd \set {1, 1} = 1$
and so:

$1 \perp 1$
demonstrating that $\perp$ is not antireflexive either.
The result follows by definition of non-reflexive relation.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $4 \ \text{(a)}$




