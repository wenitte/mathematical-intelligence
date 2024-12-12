# 

Source: https://proofwiki.org/wiki/G-Delta_Sets_form_Lattice

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\GG$ be the collection of all $G_\delta$ sets of $T$.

Then $\struct {\GG, \subseteq}$ is a lattice, where $\subseteq$ denotes the subset relation.


Proof
From Subset Relation is Ordering, $\subseteq$ is an ordering on $\GG$.
Let $G, G'$ be $G_\delta$ sets of $T$.

We have $G_\delta$ Sets Closed under Union, so that $G \cup G' \in \GG$.
From Union is Smallest Superset and Subset of Union, it follows that $G \cup G'$ is the supremum of $G$ and $G'$.

Similarly, we have $G_\delta$ Sets Closed under Intersection, and so $G \cap G' \in \GG$.
From Intersection is Largest Subset and Intersection is Subset, it follows that $G \cap G'$ is the infimum of $G$ and $G'$.

Thus any two elements of $\GG$ are seen to have both a supremum and an infimum in $\GG$.
Hence $\struct {\GG, \subseteq}$ is a lattice.
$\blacksquare$


Also see
$F_\sigma$ Sets form Lattice




