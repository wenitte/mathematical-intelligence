# 

Source: https://proofwiki.org/wiki/Coprimality_Relation_is_Non-Transitive

Theorem
Consider the coprimality relation on the set of integers:

$\forall x, y \in \Z: x \perp y \iff \gcd \set {x, y} = 1$
where $\gcd \set {x, y}$ denotes the greatest common divisor of $x$ and $y$.
Then:

$\perp$ is non-transitive.


Proof
Proof by Counterexample:
We have:














\(\ds \gcd \set {2, 3}\)

\(=\)







\(\ds 1\)




















\(\ds \gcd \set {3, 4}\)

\(=\)







\(\ds 1\)




















\(\ds \gcd \set {2, 4}\)

\(=\)







\(\ds 2\)










Hence we have:

$2 \perp 3$ and $3 \perp 4$
However, it is not the case that $2 \perp 4$.
Thus $\perp$ is not transitive.

Then we have:














\(\ds \gcd \set {2, 3}\)

\(=\)







\(\ds 1\)




















\(\ds \gcd \set {3, 5}\)

\(=\)







\(\ds 1\)




















\(\ds \gcd \set {2, 5}\)

\(=\)







\(\ds 1\)









$2 \perp 3$ and $3 \perp 5$
and also:

$2 \perp 5$
Thus $\perp$ is not antitransitive either.

The result follows by definition of non-transitive relation.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Exercise $4 \ \text{(a)}$




