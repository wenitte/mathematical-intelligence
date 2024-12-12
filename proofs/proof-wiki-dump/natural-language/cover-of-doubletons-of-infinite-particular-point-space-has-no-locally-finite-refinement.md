# 

Source: https://proofwiki.org/wiki/Cover_of_Doubletons_of_Infinite_Particular_Point_Space_has_no_Locally_Finite_Refinement

Theorem
Let $T = \struct {S, \tau_p}$ be an infinite particular point space.
Let $\CC$ be the open cover of $T$ defined as:

$\CC = \set {\set {x, p}: x \in S, x \ne p}$

Then $\CC$ has no open refinement which is locally finite.


Proof
Suppose $T$ is an infinite particular point space.
As $S$ is infinite, $\CC$ is also infinite.

Let $x \in S, x \ne p$.
Then any neighborhood of $x$ must contain $p$, by the nature of the particular point topology.
But $p$ is contained in all elements of $\CC$.
That is:

$\forall C \in \CC: p \in C$
So any neighborhood of $x$ intersects with all elements of the open cover $\CC$.
As $\CC$ is infinite, it therefore has no open refinement which is locally finite.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $9 \text { - } 10$. Infinite Particular Point Topology: $16$




