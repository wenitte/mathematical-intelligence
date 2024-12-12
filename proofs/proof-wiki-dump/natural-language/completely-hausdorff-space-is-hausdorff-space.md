# 

Source: https://proofwiki.org/wiki/Completely_Hausdorff_Space_is_Hausdorff_Space

Theorem
Let $\struct {S, \tau}$ be a $T_{2 \frac 1 2}$ (completely Hausdorff) space.

Then $\struct {S, \tau}$ is also a $T_2$ (Hausdorff) space.


Proof
Let $T = \struct {S, \tau}$ be a completely Hausdorff space.
From the definition:

$\forall x, y \in S: x \ne y: \exists U, V \in \tau: x \in U, y \in V: U^- \cap V^- = \O$
We have that Set is Subset of its Topological Closure and so $U \subseteq U^-$ and $V \subseteq V^-$.
This leads to:

$\forall x, y \in S: x \ne y: \exists U, V \in \tau: x \in U, y \in V: U \cap V = \O$
which is precisely the definition of a Hausdorff ($T_2$) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Completely Hausdorff Spaces




