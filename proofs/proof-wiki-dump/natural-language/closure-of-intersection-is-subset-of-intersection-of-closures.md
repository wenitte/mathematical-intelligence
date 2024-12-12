# 

Source: https://proofwiki.org/wiki/Closure_of_Intersection_is_Subset_of_Intersection_of_Closures



Theorem
Let $T$ be a topological space.
Let $I$ be an indexing set.
Let $\forall i \in I: H_i \subseteq T$.

Then:

$\ds \map \cl {\bigcap_I H_i} \subseteq \bigcap_I \map \cl {H_i}$
where $\map \cl {H_i}$ denotes the closure of $H_i$.


Proof
Since $\ds \bigcap_I \map \cl {H_i}$ is an intersection of closed sets, it is closed, from Topology Defined by Closed Sets.
Also, it contains $\ds \bigcap_I H_i$ and so by the main definition of closure also contains $\ds \map \cl {\bigcap_I H_i}$.
$\blacksquare$


Also see
Closure of Intersection may not equal Intersection of Closures, which shows that equality does not generally hold.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.17$




