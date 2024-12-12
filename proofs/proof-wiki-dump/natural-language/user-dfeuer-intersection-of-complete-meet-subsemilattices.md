# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Intersection_of_Complete_Meet_Subsemilattices

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $C_i$ be a complete meet subsemilattice (or a meet-complete subsemilattice?) of $S$.

Then $C = \ds \bigcap_{i \mathop \in I} C_i$ is a complete meet subsemilattice.


Proof
Let $D \subseteq C$.
By Intersection is Largest Subset, $D \subseteq C_i$ for each $i \in I$.
Thus $D$ has an infimum in $S$ and $\inf D \in C_i$ for each $i \in I$.
By the definition of intersection, $\inf D \in C$.
$\blacksquare$





