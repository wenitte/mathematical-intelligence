# 

Source: https://proofwiki.org/wiki/User:Dfeuer/CTR5

Theorem
Let $\left({S, \circ}\right)$ be a semigroup.
Let $\mathcal R$ be a transitive relation on $S$ which is compatible with $\circ$.
Let $x, i \in S$.
Suppose that $i$ is idempotent for $\circ$.
Let $n \in \N_{>0}$ be a strictly positive integer.

Then the following statements hold:

$i \mathrel{\mathcal R} x \implies i \mathrel{\mathcal R} x^n$
$x \mathrel{\mathcal R} i \implies x^n \mathrel{\mathcal R} i$


Proof
By Transitive Relation Compatible with Semigroup Operation Relates Powers of Related Elements:

$i \mathrel{\mathcal R} x \implies i^n \mathrel{\mathcal R} x^n$
$x \mathrel{\mathcal R} i \implies x^n \mathrel{\mathcal R} i^n$
By the definition of an idempotent element, $i^n = i$, so the theorem holds.
$\blacksquare$





