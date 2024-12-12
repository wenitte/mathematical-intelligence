# 

Source: https://proofwiki.org/wiki/F-Sigma_Sets_form_Lattice

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\FF$ be the collection of all $F_\sigma$ sets of $T$.

Then $\struct {\FF, \subseteq}$ is a lattice, where $\subseteq$ denotes the subset relation.


Proof
From Subset Relation is Ordering, $\subseteq$ is an ordering on $\FF$.
Let $F, F'$ be $F_\sigma$ sets of $T$.

We have $F_\sigma$ Sets Closed under Union, so that $F \cup F' \in \FF$.
From Union is Smallest Superset and Subset of Union, it follows that $F \cup F'$ is the supremum of $F$ and $F'$.

Similarly, we have $F_\sigma$ Sets Closed under Intersection, and so $F \cap F' \in \FF$.
From Intersection is Largest Subset and Intersection is Subset, it follows that $F \cap F'$ is the infimum of $F$ and $F'$.

Thus any two elements of $\FF$ are seen to have both a supremum and an infimum in $\FF$.
Hence $\struct {\FF, \subseteq}$ is a lattice.
$\blacksquare$


Also see
$G_\delta$ Sets form Lattice




