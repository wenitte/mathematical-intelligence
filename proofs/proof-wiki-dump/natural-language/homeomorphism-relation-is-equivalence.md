# 

Source: https://proofwiki.org/wiki/Homeomorphism_Relation_is_Equivalence



Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $T_1 \sim T_2$ denote that $T_1$ and $T_2$ are homeomorphic.

The relation $\sim$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
Let $T$ be a topological space.
From Identity Mapping is Homeomorphism, the identity mapping $I_T: T \to T$ is a homeomorphism.
So $T \sim T$, and $\sim$ has been shown to be reflexive.
$\Box$


Symmetry
Let $T_1$ and $T_2$ be topological spaces such that $T_1 \sim T_2$.
By definition, there exists a homeomorphism $f: T_1 \to T_2$.
From Inverse of Homeomorphism is Homeomorphism it follows that $f^{-1}: T_2 \to T_1$ is also a homeomorphism.
So $T_2 \sim T_1$, and $\sim$ has been shown to be symmetric.
$\Box$


Transitivity
Let $T_1, T_2, T_3$ be topological spaces such that $T_1 \sim T_2$ and $T_2 \sim T_3$.
By definition, there exist homeomorphisms $f: T_1 \to T_2$ and $g: T_2 \to T_3$.
From Composite of Homeomorphisms is Homeomorphism it follows that $g \circ f: T_1 \to T_3$ is also a homeomorphism.
So $T_1 \sim T_3$, and $\sim$ has been shown to be transitive.
$\Box$

$\sim$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.6$: Homeomorphisms: Definition $3.6.1$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 16$




