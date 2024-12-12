# 

Source: https://proofwiki.org/wiki/Excluded_Point_Space_is_not_Locally_Arc-Connected

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Then $T$ is not locally arc-connected.


Proof
Let $\BB \subseteq \tau_{\bar p}$ be a basis for $\tau_{\bar p}$.
Since $\BB$ covers $S$, there must be an open set $B \in \BB$ such that $p \in B$.
By definition of the excluded point topology, the only open set containing $p$ is $S$ itself.
Hence necessarily $S \in \BB$.

But by Excluded Point Space is not Arc-Connected, $S$ is not arc-connected.
Hence $\BB$ does not consist only of arc-connected sets.

Because $\BB$ was arbitrary, there cannot exist a basis for $\tau_{\bar p}$ comprising only arc-connected sets.
Hence, by definition, $T$ is not locally arc-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $3$




