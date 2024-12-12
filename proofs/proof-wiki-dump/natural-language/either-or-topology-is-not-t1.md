# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_not_T1

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Then $T$ is not a $T_1$ (Fréchet) space.


Proof
Let $x = \dfrac 1 2$.
We have that $V = \set x$ such that $x \in V, 0 \notin V$.
However, by definition of the either-or topology, the only open sets of $T$ containing $0$ also contain $\openint {-1} 1$, and so must also contain $x$.
So we have that $\nexists U, V \in \tau: 0 \in U, x \notin U, x \in V, 0 \notin V$.
Hence the result by definition of $T_1$ (Fréchet) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology: $1$




