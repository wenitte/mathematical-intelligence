# 

Source: https://proofwiki.org/wiki/Intersection_of_Complete_Meet_Subsemilattices_induces_Closure_Operator/Lemma

Lemma for Intersection of Complete Meet Subsemilattices induces Closure Operator
Let $\struct {S, \preccurlyeq}$ be an ordered set.
Let $\family {f_i}_{i \mathop \in I}$ be an indexed family of closure operators on $S$.
Let $C_i = \map {f_i} S$ be the set of closed elements with respect to $f_i$ for each $i \in I$.
Let $\family {C_i}_{i \mathop \in I}$ be an indexed family of complete meet subsemilattices of $S$.

Then $C = \ds \bigcap_{i \mathop \in I} C_i$ is also a complete meet subsemilattice.


Proof
Let $D \subseteq C$.
By Intersection is Largest Subset, $D \subseteq C_i$ for each $i \in I$.
Thus $D$ has an infimum in $S$ and $\inf D \in C_i$ for each $i \in I$.
By the definition of intersection, $\inf D \in C$.
$\blacksquare$





