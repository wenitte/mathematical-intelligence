# 

Source: https://proofwiki.org/wiki/Connected_Subspace_Lie_in_One_Component_of_Separation

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A_1 \mid A_2$ be a separation of $T$.
Let $X$ be a connected set of $T$.

Then there exist $i, j \in \set { 1, 2 }$ with $i \ne j$ such that $X \subseteq A_i$, and $X \cap A_j = \O$.


Proof
By definition of separation, $A_1$ and $A_2$ are disjoint.
Define $B_i = X \cap A_i$ for $i \in \set {1, 2}$.
From Intersection is Subset, $B_i \subseteq A_i$ for $i \in \set {1, 2}$.
From Subsets of Disjoint Sets are Disjoint, $B_1$ and $B_2$ are disjoint.

The union of $B_1$ and $B_2$ is:














\(\ds B_1 \cup B_2\)

\(=\)







\(\ds \paren {X \cap A_1} \cup \paren {X \cap A_2}\)




















\(\ds \)

\(=\)







\(\ds X \cap \paren {A_1 \cup A_2}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds X \cap S\)





Definition of Separation (Topology)














\(\ds \)

\(=\)







\(\ds X\)





Intersection with Subset is Subset




By definition of separation, $A_1$ and $A_2$ are open in $T$.
Let $S_X = \struct {X, \tau_X}$ be the topological subspace of $T$.
Then $B_1$ and $B_2$ are open in $S_X$.
If both $B_1$ and $B_2$ are non-empty, they would form a separation of $S_X$, which contradicts the assumption that $X$ is connected.
Hence either $B_1 = \O$, or $B_2 = \O$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $3$: Connectedness and Compactness: $\S 23$: Connected Spaces




