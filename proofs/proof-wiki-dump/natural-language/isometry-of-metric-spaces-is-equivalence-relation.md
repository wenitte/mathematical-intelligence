# 

Source: https://proofwiki.org/wiki/Isometry_of_Metric_Spaces_is_Equivalence_Relation



Theorem
Let $M_1$ and $M_2$ be metric spaces.
Let $M_1 \sim M_2$ denote that $M_1$ and $M_2$ are isometric.

The relation $\sim$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $M$ be a topological space.
From Identity Mapping on Metric Space is Isometry, the identity mapping $I_M: M \to M$ is an isometry.
So $M \sim M$, and $\sim$ has been shown to be reflexive.
$\Box$


Symmetry
Let $M_1$ and $M_2$ be topological spaces such that $M_1 \sim M_2$.
By definition, there exists an isometry $f: M_1 \to M_2$.
From Inverse of Isometry of Metric Spaces is Isometry it follows that $f^{-1}: M_2 \to M_1$ is also an isometry.
So $M_2 \sim M_1$, and $\sim$ has been shown to be symmetric.
$\Box$


Transitivity
Let $M_1, M_2, M_3$ be metric spaces such that $M_1 \sim M_2$ and $M_2 \sim M_3$.
By definition, there exist isometries $f: M_1 \to M_2$ and $g: M_2 \to M_3$.
From Composite of Isometries is Isometry it follows that $g \circ f: M_1 \to M_3$ is also an isometry.
So $M_1 \sim M_3$, and $\sim$ has been shown to be transitive.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces




