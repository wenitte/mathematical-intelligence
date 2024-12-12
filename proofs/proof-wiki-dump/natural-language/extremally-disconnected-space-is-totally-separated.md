# 

Source: https://proofwiki.org/wiki/Extremally_Disconnected_Space_is_Totally_Separated

Theorem
Let $T = \struct {S, \tau}$ be an extremally disconnected topological space.
Then $T$ is totally separated.


Proof
Let $T = \struct {S, \tau}$ be an extremally disconnected topological space.

Then by definition $T$ is a $T_2$ (Hausdorff) space such that the closure of every open set of $T$ is open.

Let $x, y \in S: x \ne y$.
As $T$ is a $T_2$ (Hausdorff) space, there exist disjoint open sets $U, V \in \tau$ containing $x$ and $y$ respectively.
Let $U^-$ denote the closure of $U$.
From Topological Closure is Closed, $U^-$ is closed.
But $U$ is open, so from the definition of extremally disconnected space, then $U^-$ is also open.
So $U^-$ is clopen.

From Open Set Disjoint from Set is Disjoint from Closure, $U^- \cap V = \O$, so $y \notin U^-$.
Thus $\set {U^- \mid S \setminus U^-}$ is a partition where $x \in U^-$ and $y \in X \setminus U^-$.
Thus, by definition, $T$ is totally separated.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Disconnectedness




