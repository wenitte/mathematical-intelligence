# 

Source: https://proofwiki.org/wiki/Sequence_of_Mappings_Converges_Pointwise_iff_Converges_at_Each_Point

Theorem
Let $D$ be a set.
Let $T$ be a topological space.
For each $n \in \N$, let $f_n : D \to T$ be a mapping.
Let $f : D \to T$ also be a mapping.

Then:

$\sequence {f_n}$ converges pointwise to $f$
if and only if

for every $x \in D$, $\sequence {\map {f_n} x}$ converges to $\map f x$


Proof
Follows from Sequence on Product Space Converges to Point iff Projections Converge to Projections of Point, with:

$I = D$
$\forall i \in D: T_i = T$
$\blacksquare$

Source
2000: James R. Munkres: Topology (2nd ed.): $7$ Complete Metric Spaces and Function Spaces: $\S 46$ Pointwise and Compact Convergence: Theorem $46.1$




