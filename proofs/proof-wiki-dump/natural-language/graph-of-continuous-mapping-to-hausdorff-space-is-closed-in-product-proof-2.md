# 

Source: https://proofwiki.org/wiki/Graph_of_Continuous_Mapping_to_Hausdorff_Space_is_Closed_in_Product/Proof_2

Theorem
Let $T_A = \struct {A, \tau_A}$ and $T_B = \struct {B, \tau_B}$ be topological spaces.
Let $T_B$ be a Hausdorff space.
Let $f: T_A \to T_B$ be a continuous mapping.

Then the graph of $f$ is a closed subset of $T_A \times T_B$ under the product topology.


Proof
Let $G_f$ be the graph of $f$:

$G_f = \set {\tuple {x, y} \in A \times B: \map f x = y}$
Fix a point $\tuple {x_0, y_0}$ in $\paren {A \times B} \setminus G_f = \set {\tuple {x, y} \in A \times B : \map f x \ne y}$.
As $\map f {x_0} \ne y_0$ and $T_B$ is Hausdorff, there exists disjoint, non-empty, open sets $V_{x_0}$ and $V_{y_0}$ of $T_B$ containing $\map f {x_0}$ and $y_0$ respectively. 
From the definition of continuous mapping, $f^{-1} \sqbrk {V_{x_0} }$ is an open set of $T_A$. 
So we have that:

$f^{-1} \sqbrk {V_{x_0} } \times V_{y_0}$ is open in $T_A \times T_B$
$f^{-1} \sqbrk {V_{x_0} } \times V_{y_0}$ is a subset of $\paren {A \times B} \setminus G_f$ containing $\tuple {x_0, y_0}$
Hence it follows that $\paren {A \times B} \setminus G_f$ is open in $T_A \times T_B$.
Hence $G_f$ is closed in $T_A \times T_B$.
$\blacksquare$





