# 

Source: https://proofwiki.org/wiki/Compact_Hausdorff_Topology_is_Minimal_Hausdorff

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space which is compact.

Then $\tau$ is the minimal subset of the power set $\powerset S$ such that $T$ is a Hausdorff space.


Proof
Aiming for a contradiction, suppose there exists a topology $\tau'$ on $S$ such that:

$\tau' \subseteq \tau$ but $\tau' \ne \tau$
$\tau'$ is a Hausdorff space.
From Equivalence of Definitions of Finer Topology:

the identity mapping $I_S: \struct {S, \tau} \to \struct {S, \tau'}$ is continuous.

Let $A \in \tau$.
Then $S \setminus A \subseteq S$ is closed in $\struct {S, \tau}$.
By Closed Subspace of Compact Space is Compact, $S \setminus A$ is compact in $\struct {S, \tau}$.
From Continuous Image of Compact Space is Compact:

$I_S \sqbrk {S \setminus A}$ is also compact.
By hypothesis, $\struct {S, \tau'}$ is a Hausdorff space.
From Compact Subspace of Hausdorff Space is Closed:

$I_S \sqbrk {S \setminus A}$ is closed in $\struct {S, \tau'}$.
Hence:

$A = S \setminus I_S \sqbrk {S \setminus A} \in \tau'$
By definition of subset:

$\tau \subseteq \tau'$

Thus we have that $\tau \subseteq \tau'$ and $\tau' \subseteq \tau$.
Hence by definition of set equality:

$\tau' = \tau$
But this contradicts our hypothesis that $\tau' \ne \tau$.
By Proof by Contradiction, it follows that no topology which is strictly coarser than $\tau$ can be Hausdorff.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Compactness Properties and the $T_i$ Axioms




