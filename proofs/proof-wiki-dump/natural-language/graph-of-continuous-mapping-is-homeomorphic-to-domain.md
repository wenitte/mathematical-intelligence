# 

Source: https://proofwiki.org/wiki/Graph_of_Continuous_Mapping_is_Homeomorphic_to_Domain

Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $f$ be a homeomorphism from $T_1$ to $T_2$.
Let $G_f$ denote the graph of $f$.

Then $f$ is homeomorphic to $G_f$.


Prooof
Let $\iota: G_f \to T_1 \times T_2$ be the inclusion mapping from $G_f$ into $T_1 \times T_2$.
Let $\theta: G_f \to T_1$ and $\psi: T_1 \to G_f$ be given by:

$\theta = \pr_1 \circ \iota$
$\forall x \in T_1: \map \psi x = \tuple {x, \map f x}$
$\theta$ and $\psi$ are seen to be inverses of each other.
The fact that $\theta$ is continuous follows from the fact that $\pr_1$ and $\iota$ are both continuous.
Then $\pr_1 \circ \iota \circ \psi$ is the identity mapping on $T_1$ and so is continuous.
Also, $\pr_2 \circ \iota \circ \psi$ is also continuous.
Hence by Continuous Mapping to Product Space, $\iota \circ \psi$ is continuous.
It follows by Continuity of Composite with Inclusion/Inclusion on Mapping that $\psi$ is continuous.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.6$: Homeomorphisms




