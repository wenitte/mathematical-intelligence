# 

Source: https://proofwiki.org/wiki/Max_Operation_on_Woset_is_Monoid

Theorem
Let $\struct {S, \preceq}$ be a well-ordered set.
Let $\max \set {x, y}$ denote the max operation on $x, y \in S$.

Then $\struct {S, \max}$ is a monoid.

Its identity element is the smallest element of $S$.


Proof
From Well-Ordering is Total Ordering, we have that $\struct {S, \preceq}$ is a totally ordered set.
Thus, by Max Operation on Toset forms Semigroup, $\struct {S, \max}$ is a semigroup.

By definition, a well-ordered set has a smallest element.
So:

$\exists m \in S: \forall x \in S: m \preceq x$
where $m$ is that smallest element.
It follows by definition of the max operation that:

$\forall x \in S: \max \set {m, x} = x$
Thus $m$ is the identity element of $\struct {S, \max}$.
Hence the result, by definition of monoid.
$\blacksquare$





