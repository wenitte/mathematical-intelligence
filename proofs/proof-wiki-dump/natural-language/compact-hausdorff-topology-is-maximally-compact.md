# 

Source: https://proofwiki.org/wiki/Compact_Hausdorff_Topology_is_Maximally_Compact

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space which is compact.

Then $\tau$ is maximally compact.


Proof
Let $\tau'$ be a topology on $S$ such that $\tau \subseteq \tau'$ but that $\tau \ne \tau'$.
Consider the identity mapping $I_S: \struct {S, \tau'} \to \struct {S, \tau}$.
From Separation Properties Preserved in Subspace, $I_S$ is a continuous bijection from a Hausdorff space to a compact Hausdorff space.

Aiming for a contradiction, suppose $\struct {S, \tau'}$ is compact.
From Continuous Bijection from Compact to Hausdorff is Homeomorphism, $I_S$ is also open.
Hence:

$\tau' \subseteq \tau$
Thus we have that $\tau \subseteq \tau'$ and $\tau' \subseteq \tau$.
Hence by definition of set equality:

$\tau' = \tau$
But this contradicts our hypothesis that $\tau' \ne \tau$.
By Proof by Contradiction, it follows that no topology which is strictly finer than $\tau$ can be compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Compactness Properties and the $T_i$ Axioms




