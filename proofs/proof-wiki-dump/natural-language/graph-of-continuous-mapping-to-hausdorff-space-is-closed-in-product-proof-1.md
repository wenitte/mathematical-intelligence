# 

Source: https://proofwiki.org/wiki/Graph_of_Continuous_Mapping_to_Hausdorff_Space_is_Closed_in_Product/Proof_1

Theorem
Let $T_A = \struct {A, \tau_A}$ and $T_B = \struct {B, \tau_B}$ be topological spaces.
Let $T_B$ be a Hausdorff space.
Let $f: T_A \to T_B$ be a continuous mapping.

Then the graph of $f$ is a closed subset of $T_A \times T_B$ under the product topology.


Proof
Let $G_f$ be the graph of $f$:

$G_f = \set {\tuple {x, y} \in A \times B: \map f x = y}$

Let $I_B: T_B \to T_B$ be the identity mapping on $B$:

$\forall y \in B: \map {I_B} y = y$
From Identity Mapping is Continuous, $I_B$ is continuous on $T_B$.

Let $f \times I_B: T_A \times T_B \to T_B \times T_B$ be the product map:

$\map {f \times I_B} {x, y} = \tuple {\map f x, y}$
From Continuous Mapping to Product Space, $f \times I_B$ is continuous.

Let $\Delta_B$ be the diagonal relation on $B$.
From Hausdorff Space iff Diagonal Set on Product is Closed, $\Delta_B$ is a closed set of $T_B \times T_B$ under the product topology.

From Continuity Defined from Closed Sets:














\(\ds (\paren {f \times I_B}^{-1} \sqbrk {\Delta_B}\)

\(=\)







\(\ds \set {\tuple {x, y} \in A \times B: \map {f \times I_B} {x, y} \in \Delta_B}\)




















\(\ds \)

\(=\)







\(\ds \set {\tuple {x, y} \in A \times B : \tuple {\map f x, y} \in \Delta_B}\)




















\(\ds \)

\(=\)







\(\ds \set {\tuple {x, y} \in A \times B : \map f x = y}\)




















\(\ds \)

\(=\)







\(\ds G_f\)









is closed in $T_A \times T_B$ endowed with the product topology.
$\blacksquare$





