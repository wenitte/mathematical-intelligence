# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_from_Compact_Space_to_Hausdorff_Space_is_Closed_Mapping

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a compact topological space.
Let $T_2 = \struct {S_2, \tau_2}$ be a $T_2$ (Hausdorff) space.
Let $f: T_1 \to T_2$ be a continuous mapping.

Then $f$ is a closed mapping.


Proof
Let $C$ be a closed subspace of $T_1$.
By Closed Subspace of Compact Space is Compact, $C$ is compact.
By Continuous Image of Compact Space is Compact, $f \sqbrk C$ is compact in $T_2$.
By Compact Subspace of Hausdorff Space is Closed, $f \sqbrk C$ is closed in $T_2$.
The result follows by definition of closed mapping.
$\blacksquare$





