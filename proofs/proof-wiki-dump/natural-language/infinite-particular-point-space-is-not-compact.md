# 

Source: https://proofwiki.org/wiki/Infinite_Particular_Point_Space_is_not_Compact

Theorem
Let $T = \struct {S, \tau_p}$ be an infinite particular point space.

Then $T$ is not compact.


Proof
Consider the open cover of $T$:

$\CC = \set {\set {x, p}: x \in S, x \ne p}$
As $S$ is infinite, then so is $\CC$, as we can set up a bijection from $\phi: S \setminus \set p \leftrightarrow \CC$:

$\forall x \in S \setminus \set p: \map \phi x = \set {x, p}$
Hence $\CC$ has no finite subcover.
The result follows by definition of compactness.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $9 \text { - } 10$. Infinite Particular Point Topology: $5$




