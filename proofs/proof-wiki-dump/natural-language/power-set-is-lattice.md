# 

Source: https://proofwiki.org/wiki/Power_Set_is_Lattice



Theorem
Let $S$ be a set.
Let $\struct {\powerset S, \subseteq}$ be the relational structure defined on $\powerset S$ by the subset relation $\subseteq$.
Then $\struct {\powerset S, \subseteq}$ is a lattice.


Proof
From Subset Relation on Power Set is Partial Ordering, we have that $\subseteq$ is a partial ordering.
Let $X, Y \in \powerset S$.
Then from Union is Smallest Superset:

$X \subseteq T, Y \subseteq T \iff X \cup Y \subseteq T$
and from Intersection is Largest Subset:

$X \subseteq T, Y \subseteq T \iff T \subseteq X \cap Y$
So $X \cap Y$ is the infimum and $X \cup Y$ is the supremum of $\set {X, Y}$.
Hence by definition $\powerset S$ is a lattice.
$\blacksquare$


Also see
Power Set is Complete Lattice


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Example $14.3$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$: Example $7.7$




