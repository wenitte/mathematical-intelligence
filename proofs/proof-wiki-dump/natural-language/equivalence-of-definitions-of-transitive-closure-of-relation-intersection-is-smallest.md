# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Intersection_is_Smallest

Theorem
Let $\RR$ be a relation on a set $S$.

Then the intersection of all transitive relations on $S$ that contain $\RR$ is the smallest transitive relation on $S$ that contains $\RR$.


Proof
Note that the trivial relation $\TT = S \times S$ on $S$ contains $\RR$, by the definition of a relation on $S$.
Further, $\TT$ is transitive by Trivial Relation is Equivalence.

Thus there is at least one transitive relation on $S$ that contains $\RR$.
Now define $\RR^+$ as the intersection of all transitive relations on $S$ that contain $\RR$:

$\ds \RR^+ := \bigcap \set {\RR': \text {$\RR'$ is transitive and $\RR \subseteq \RR'$} }$

By Intersection of Transitive Relations is Transitive, $\RR^+$ is also a transitive relation on $S$.
By Set Intersection Preserves Subsets, it also holds that $\RR \subseteq \RR^+$.
Lastly, by Intersection is Subset, for any transitive relation $\RR'$ containing $\RR$, it must be that $\RR^+ \subseteq \RR'$.

Thus $\RR^+$ is indeed the smallest transitive relation on $S$ containing $\RR$.
$\blacksquare$





